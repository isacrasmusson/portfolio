import { Today } from "@/components/index/Today";
import { Projects } from "@/components/index/Projects";
import { projects } from "@/components/index/data/projects";
import { educationalProjects } from "@/components/index/data/educationalProjects";
import { More } from "@/components/index/More";

export default function Home() {
  return (
    <>
      <Today className="mb-28" />
      <Projects title="Projects" projects={projects} className="mb-28" />
      <Projects
        title="Education"
        projects={educationalProjects}
        className="mb-28"
      />
      <More />
    </>
  );
}
