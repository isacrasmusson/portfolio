const More = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <h2 className="mb-3 sm:mb-4 block font-newsreader font-medium italic">
        More
      </h2>
      <p className="text-muted-foreground">
        You can see more of my experience on{" "}
        <a
          href="https://www.linkedin.com/in/isac-rasmusson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        and more of my code on{" "}
        <a
          href="https://github.com/irasmusson?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export { More };
