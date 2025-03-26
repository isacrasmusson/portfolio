import { cn } from "@/lib/utils";

function Technology({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      {...props}
      className={cn("whitespace-nowrap text-muted-foreground", className)}
    >
      {children}
    </li>
  );
}

function TechnologyBlock({
  children,
  type,
  className,
  ...props
}: React.ComponentProps<"div"> & { type?: string }) {
  return (
    <section
      {...props}
      aria-label={type}
      className={cn("space-y-2", className)}
    >
      {type && (
        <span className="font-newsreader text-muted-foreground block text-sm">
          {type}
        </span>
      )}
      <ul className="space-y-1">{children}</ul>
    </section>
  );
}

function Technologies({ className }: React.ComponentProps<"section">) {
  return (
    <section className={cn("sm:p-page space-y-4", className)}>
      <h2 className="p-page sm:px-0 block font-newsreader font-medium italic">
        Technologies
      </h2>

      <div className="overflow-mask pl-6 pr-16 pb-6 sm:pb-0 sm:pl-0 sm:pr-0 flex flex-row justify-between gap-20 sm:gap-12 overflow-x-auto overflow-y-hidden">
        <TechnologyBlock type="Core">
          <Technology>JavaScript</Technology>
          <Technology>TypeScript</Technology>
          <Technology>Node</Technology>
        </TechnologyBlock>

        <TechnologyBlock type="Frontend">
          <Technology>React</Technology>
          <Technology>CSS</Technology>
          <Technology>Tailwind</Technology>
          <Technology>TanStack</Technology>
          <Technology>Vite</Technology>
        </TechnologyBlock>

        <TechnologyBlock type="Backend">
          <Technology>Express</Technology>
          <Technology>MongoDB</Technology>
          <Technology>PostgreSQL</Technology>
          <Technology>Drizzle</Technology>
          <Technology>Mongoose</Technology>
        </TechnologyBlock>

        <TechnologyBlock type="DevOps & Testing">
          <Technology>Docker</Technology>
          <Technology>Vitest</Technology>
          <Technology>React Testing Library</Technology>
          <Technology>Playwright</Technology>
          <Technology>Testcontainers</Technology>
        </TechnologyBlock>
      </div>
    </section>
  );
}

export { Technologies };
