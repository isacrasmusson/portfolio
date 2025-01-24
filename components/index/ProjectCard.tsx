import { Project } from "@/types";

const ProjectCard = ({ href, title, description }: Project) => {
  return (
    <a
      href={href}
      target="_blank"
      className="-mx-3 flex flex-col rounded-md px-3 no-underline sm:hover:bg-accent sm:py-3"
    >
      <span>{title}</span>
      <span className="text-muted-foreground">{description}</span>
    </a>
  );
};

export { ProjectCard };
