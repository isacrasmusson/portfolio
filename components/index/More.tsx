const More = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <span className="mb-5 block font-medium sm:mb-6">More</span>
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
          href="https://github.com/johnschatner?tab=repositories"
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
