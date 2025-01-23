const Today = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <span className="mb-5 block font-medium sm:mb-6">Today</span>
      <p className="text-muted-foreground">
        I work as a fullstack developer at Cope, where I am part of a team that
        develops and maintains a financial system for both the public and
        private sectors.
      </p>
    </div>
  );
};

export { Today };
