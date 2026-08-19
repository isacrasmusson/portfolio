const Today = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <h2 className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        Today
      </h2>
      <p className="text-muted-foreground">
        I work as a software engineer at IKEA Financial Services, helping
        develop and maintain financial systems.
      </p>
    </section>
  );
};

export { Today };
