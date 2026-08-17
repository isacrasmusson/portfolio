const Today = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <span className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        Today
      </span>
      <p className="text-muted-foreground">
        I work as a software engineer at IKEA Financial Services, helping
        develop and maintain financial systems.
      </p>
    </div>
  );
};

export { Today };
