import { Parallax } from "@/components/Parallax";

/**
 * Renders a website screenshot inside a soft "browser window" frame so that
 * landscape site captures look intentional inside portrait/landscape grid
 * cells instead of being awkwardly cropped.
 */
export function SiteFrame({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  let display = url ?? "";
  try {
    if (url) display = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    /* keep raw */
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-ink/[0.04] to-ink/[0.12]">
      <div className="relative w-full max-w-full aspect-[16/10] rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] bg-paper ring-1 ring-ink/10">
        {/* Browser chrome */}
        <div className="absolute top-0 inset-x-0 h-6 md:h-8 bg-paper border-b border-ink/10 flex items-center px-3 gap-1.5 z-10">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#28c840]" />
          {display && (
            <span className="ml-3 hidden md:inline-block text-[10px] tracking-wide text-ash truncate">
              {display}
            </span>
          )}
        </div>
        {/* Screenshot */}
        <div className="absolute inset-0 pt-6 md:pt-8 overflow-hidden">
          <Parallax offset={20} className="absolute inset-0">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-cinema group-hover:scale-[1.03]"
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
}
