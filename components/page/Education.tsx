function Education({ className }: React.ComponentProps<"section">) {
  return (
    <section className={className}>
      <h2 className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        Education
      </h2>
      <span className="block font-medium">EC Education</span>
      <span className="block text-muted-foreground">Frontend Developer</span>
    </section>
  );
}

export { Education };
