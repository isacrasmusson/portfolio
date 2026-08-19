import { Today } from "@/components/page/Today";
import { Projects } from "@/components/page/Projects";
import { projects } from "@/components/page/data/projects";
import { More } from "@/components/page/More";
import { Technologies } from "@/components/page/Technologies";
import { Education } from "@/components/page/Education";

export default function Home() {
  return (
    <div aria-label="Home page" className="space-y-16 sm:space-y-20">
      <Today className="p-page" />
      <Projects title="Projects" projects={projects} className="p-page" />
      <Education className="p-page" />
      <Technologies />
      <More className="p-page" />
    </div>
  );
}
