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
      <h2 className="mb-1.5 block font-medium font-newsreader italic">
        {title}
      </h2>
      <div className="flex flex-col gap-7 sm:gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export { Projects };
