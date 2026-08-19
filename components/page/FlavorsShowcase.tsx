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
        <div className="flavors-canvas overflow-hidden rounded-2xl p-4 sm:p-8">
          <div className="overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.01]">
            <div className="relative aspect-16/10 overflow-hidden bg-white">
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
