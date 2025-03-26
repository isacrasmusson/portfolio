import { Project } from "@/types";
import Link from "next/link";

const ProjectCard = ({ to, href, title, description }: Project) => {
  const Comp = to ? Link : "a";

  return (
    <Comp
      href={to ? `projects/${to}` : href}
      target={to ? "" : "_blank"}
      className="-mx-3 flex flex-col gap-1 rounded-md px-3 no-underline sm:hover:bg-accent sm:py-3"
    >
      <span className="underline underline-offset-1 decoration-muted-foreground/25 dark:decoration-muted-foreground/40">
        {title}
      </span>
      <span className="text-muted-foreground">{description}</span>
    </Comp>
  );
};

export { ProjectCard };
