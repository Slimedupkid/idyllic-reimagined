import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  project_type: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

const RECIPIENT = "info@lynque.co.za";

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Validation failed", issues: parsed.error.issues },
            { status: 422 },
          );
        }

        const data = parsed.data;
        const submissionId = crypto.randomUUID();

        // 1. Persist the submission
        const { error: insertError } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            id: submissionId,
            name: data.name,
            email: data.email,
            project_type: data.project_type || null,
            budget: data.budget || null,
            message: data.message,
          });

        if (insertError) {
          console.error("[contact] insert failed:", insertError);
          return Response.json(
            { error: "Could not save submission" },
            { status: 500 },
          );
        }

        // 2. Try to send the notification email via the transactional queue.
        //    This is best-effort — if the email infra isn't ready yet, the
        //    submission is still saved and the user gets a success response.
        try {
          // @ts-expect-error - rpc is dynamic, queue wrapper exists once email infra is set up
          const { error: rpcError } = await supabaseAdmin.rpc("enqueue_email", {
            queue_name: "transactional_emails",
            payload: {
              templateName: "contact-notification",
              recipientEmail: RECIPIENT,
              idempotencyKey: `contact-${submissionId}`,
              templateData: {
                name: data.name,
                email: data.email,
                projectType: data.project_type || "—",
                budget: data.budget || "—",
                message: data.message,
                submissionId,
              },
            },
          });
          if (rpcError) {
            console.warn("[contact] email enqueue failed (saved anyway):", rpcError.message);
          }
        } catch (e) {
          console.warn("[contact] email infra not ready (saved anyway):", e);
        }

        return Response.json({ ok: true, id: submissionId });
      },
    },
  },
});
