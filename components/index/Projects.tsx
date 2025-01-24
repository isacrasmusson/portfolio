import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

const Projects = ({
  title,
  projects,
  className,
}: {
  title: string;
  projects: Project[];
  className?: string;
}) => {
  return (
    <div className={className}>
      <span className="mb-5 sm:mb-4 block font-medium">{title}</span>
      <div className="flex flex-col gap-7 sm:gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export { Projects };
