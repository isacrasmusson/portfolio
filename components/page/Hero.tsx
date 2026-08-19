const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <h1 className="font-newsreader font-medium italic text-3xl leading-tight text-balance">
        Less, but better.
      </h1>
      <p className="mt-5 text-muted-foreground">
        I&apos;m a software engineer at IKEA Financial Services, helping
        develop and maintain financial systems. On the side I&apos;m building{" "}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          Flavors
        </a>
        , a recipe app that makes cooking simpler.
      </p>
    </section>
  );
};

export { Hero };
