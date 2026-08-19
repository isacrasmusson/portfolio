import { cn } from "@/lib/utils";

/**
 * A live, scaled-down render of flavors.app. The iframe is inert
 * (pointer-events disabled) — wrap it in a link to make it clickable.
 * `anchor` scrolls the embedded page to a section id on the landing page.
 */
const LivePreview = ({
  anchor,
  className,
}: {
  anchor?: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "relative block aspect-16/10 overflow-hidden rounded-lg bg-white",
        className
      )}
    >
      <iframe
        src={`https://www.flavors.app/?embed${anchor ? `#${anchor}` : ""}`}
        title="Live preview of flavors.app"
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] select-none border-0"
      />
    </span>
  );
};

export { LivePreview };
