import type { Metadata } from "next";
import { Heading } from "@/components/global/Article/Heading";
import { LivePreview } from "@/components/global/LivePreview";

export const metadata: Metadata = {
  title: "Why I'm building Flavors",
  description:
    "I like to cook. I'm less good at keeping track of recipes. Flavors is my attempt at a fix.",
};

const SectionPreview = ({ anchor }: { anchor: string }) => {
  return (
    <a
      href={`https://www.flavors.app/#${anchor}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-6 block no-underline"
    >
      <span className="flavors-canvas block overflow-hidden rounded-xl p-2 sm:p-3">
        <LivePreview
          anchor={anchor}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.01]"
        />
      </span>
    </a>
  );
};

export default function Flavors() {
  return (
    <article className="p-page max-w-xl text-[17px]">
      <h1 className="mb-10 font-newsreader text-2xl font-medium italic sm:text-3xl">
        {"Why I'm building Flavors"}
      </h1>
      <p className="text-muted-foreground">
        {`I like to cook. I'm less good at keeping track of recipes. They end
        up as screenshots, bookmarks, and notes, then disappear. `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          Flavors
        </a>
        {` is my attempt at a fix.`}
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        {`The previews below are the actual site, live. Click one to see it
        properly.`}
      </p>
      <Heading href="collect">{"Collect"}</Heading>
      <p className="text-muted-foreground">
        {`Paste a link. Flavors picks out the ingredients and steps and keeps
        the recipe in one place. Yours stay private unless you share them.`}
      </p>
      <SectionPreview anchor="save" />
      <Heading href="scale">{"Scale"}</Heading>
      <p className="text-muted-foreground">
        {`Recipes are written for four. You're cooking for two. Flavors does
        the math for every quantity, in every step, in cups or grams.`}
      </p>
      <SectionPreview anchor="scale" />
      <Heading href="plan">{"Plan"}</Heading>
      <p className="text-muted-foreground">
        {`Pick your recipes for the week. Flavors turns them into one shopping
        list. That's it.`}
      </p>
      <SectionPreview anchor="plan" />
      <Heading href="cook">{"Cook"}</Heading>
      <p className="text-muted-foreground">
        {`One step at a time, in cooking mode. Any time mentioned in a step
        becomes a timer. Tap it, keep cooking.`}
      </p>
      <SectionPreview anchor="cook" />
      <Heading href="why">{"Why"}</Heading>
      <p className="text-muted-foreground">
        {`Flavors doesn't reinvent anything, and it isn't trying to. It solves
        the small problems I kept running into in my own kitchen, and it tries
        to stay out of the way. Judge for yourself at `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          flavors.app
        </a>
        {`.`}
      </p>
    </article>
  );
}
