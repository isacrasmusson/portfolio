import { Hero } from "@/components/page/Hero";
import { FlavorsShowcase } from "@/components/page/FlavorsShowcase";
import { Technologies } from "@/components/page/Technologies";
import { Education } from "@/components/page/Education";
import { Footer } from "@/components/page/Footer";

const stagger = (i: number) => ({ "--stagger": i }) as React.CSSProperties;

export default function Home() {
  return (
    <div aria-label="Home page" className="space-y-16 sm:space-y-20">
      <div className="enter" style={stagger(0)}>
        <Hero className="p-page" />
      </div>
      <div className="enter" style={stagger(1)}>
        <FlavorsShowcase className="p-page" />
      </div>
      <div className="enter" style={stagger(2)}>
        <Technologies className="p-page" />
      </div>
      <div className="enter" style={stagger(3)}>
        <Education className="p-page" />
      </div>
      <div className="enter" style={stagger(4)}>
        <Footer className="p-page" />
      </div>
    </div>
  );
}
