const groups: [string, string[]][] = [
  ["Core", ["JavaScript", "TypeScript", "Node"]],
  ["Frontend", ["React", "CSS", "Tailwind", "TanStack", "Vite"]],
  ["Backend", ["Express", "MongoDB", "PostgreSQL", "Drizzle", "Mongoose"]],
  [
    "DevOps & Testing",
    ["Docker", "Vitest", "React Testing Library", "Playwright", "Testcontainers"],
  ],
];

function Technologies({ className }: React.ComponentProps<"section">) {
  return (
    <section className={className}>
      <h2 className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        Technologies
      </h2>
      <dl className="space-y-4 sm:space-y-3">
        {groups.map(([label, items]) => (
          <div
            key={label}
            className="grid gap-0.5 sm:grid-cols-[10rem_1fr] sm:gap-4"
          >
            <dt className="text-sm leading-relaxed text-muted-foreground">
              {label}
            </dt>
            <dd>{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export { Technologies };
