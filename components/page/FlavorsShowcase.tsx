import Link from "next/link";

/**
 * A live, scaled-down render of the real flavors.app site inside a minimal
 * browser frame. The iframe is inert (pointer-events disabled); the whole
 * card links to the site itself.
 */
const FlavorsShowcase = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <h2 className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        Selected Work
      </h2>

      <a
        href="https://flavors.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group block no-underline"
      >
        <div className="flavors-canvas overflow-hidden rounded-2xl border border-black/5 p-4 sm:p-8 dark:border-white/10">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-background shadow-[0_20px_50px_-20px_rgba(60,20,0,0.4)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-20px_rgba(60,20,0,0.5)] dark:border-white/10">
            <div className="flex items-center gap-2 border-b border-black/5 bg-muted/60 px-3 py-2 dark:border-white/5">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span className="mx-auto -translate-x-3 rounded-md bg-background/80 px-3 py-0.5 text-[11px] text-muted-foreground">
                flavors.app
              </span>
            </div>

            <div className="relative aspect-16/10 overflow-hidden">
              <iframe
                src="https://www.flavors.app"
                title="Live preview of flavors.app"
                loading="lazy"
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] select-none border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div>
            <span className="font-medium">Flavors</span>
            <p className="text-muted-foreground">
              Collect recipes, plan your week, cook smarter.
            </p>
          </div>
          <span className="shrink-0 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            flavors.app ↗
          </span>
        </div>
      </a>

      <p className="mt-3 text-sm text-muted-foreground">
        <Link href="/projects/flavors">Read why I&apos;m building it</Link>
      </p>
    </section>
  );
};

export { FlavorsShowcase };
