import { Project } from "@/types";

const ProjectCard = ({ href, title, description }: Project) => {
  return (
    <a
      href={href}
      target="_blank"
      className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-accent sm:py-3"
    >
      <div className="font-medium">{title}</div>
      <div className="text-muted-foreground">{description}</div>
    </a>
  );
};

export { ProjectCard };
