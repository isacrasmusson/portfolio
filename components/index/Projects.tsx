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
      <span className="mb-5 block font-medium sm:mb-6">{title}</span>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export { Projects };
