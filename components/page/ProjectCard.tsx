import { Project } from "@/types";
import Link from "next/link";

const ProjectCard = ({ to, href, title, description, year }: Project) => {
  const Comp = to ? Link : "a";

  return (
    <Comp
      href={to ? `projects/${to}` : href}
      target={to ? "" : "_blank"}
      className="group -mx-3 flex flex-col gap-1 rounded-lg px-3 no-underline transition-colors sm:py-3 sm:hover:bg-accent"
    >
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-muted-foreground tabular-nums">
          {year}
        </span>
      </span>
      <span className="text-muted-foreground">{description}</span>
    </Comp>
  );
};

export { ProjectCard };
