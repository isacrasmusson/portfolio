import { Today } from "@/components/index/Today";
import { Projects } from "@/components/index/Projects";
import { projects } from "@/components/index/data/projects";
import { educationalProjects } from "@/components/index/data/educationalProjects";
import { More } from "@/components/index/More";

export default function Home() {
  return (
    <>
      <Today className="mb-16 sm:mb-32" />
      <Projects
        title="Projects"
        projects={projects}
        className="mb-16 sm:mb-32"
      />
      <Projects
        title="Education"
        projects={educationalProjects}
        className="mb-16 sm:mb-32"
      />
      <More />
    </>
  );
}
