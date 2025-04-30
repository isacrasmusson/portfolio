const More = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <span className="mb-3 sm:mb-4 block font-medium font-newsreader italic">
        More
      </span>
      <span className="text-muted-foreground">
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
      </span>
    </div>
  );
};

export { More };
