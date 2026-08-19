const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <div className="flex items-center justify-between border-t pt-8 text-sm text-muted-foreground">
        <span>Isac Rasmusson</span>
        <nav className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/isac-rasmusson/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/irasmusson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
