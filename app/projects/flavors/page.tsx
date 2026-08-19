import type { Metadata } from "next";
import { Heading } from "@/components/global/Article/Heading";

export const metadata: Metadata = {
  title: "Why I'm building Flavors",
  description:
    "I like to cook. I don't like managing recipes. Flavors is my fix.",
};

export default function Flavors() {
  return (
    <article className="p-page max-w-xl text-[17px]">
      <h1 className="mb-10 font-newsreader text-2xl font-medium italic sm:text-3xl">
        {"Why I'm building Flavors"}
      </h1>
      <p className="text-muted-foreground">
        {`I like to cook. I don't like managing recipes. They end up as
        screenshots, bookmarks, and notes — then they disappear. `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          Flavors
        </a>
        {` is my fix.`}
      </p>
      <Heading href="collect">{"Collect"}</Heading>
      <p className="text-muted-foreground">
        {`Paste a link. Flavors pulls out the ingredients and steps and saves
        the recipe in one place. Yours stay private unless you share them.`}
      </p>
      <Heading href="scale">{"Scale"}</Heading>
      <p className="text-muted-foreground">
        {`Recipes are written for four. You're cooking for two. Flavors does
        the math — every quantity, in every step, in cups or grams.`}
      </p>
      <Heading href="plan">{"Plan"}</Heading>
      <p className="text-muted-foreground">
        {`Pick your recipes for the week. Flavors turns them into one shopping
        list. That's it.`}
      </p>
      <Heading href="cook">{"Cook"}</Heading>
      <p className="text-muted-foreground">
        {`One step at a time, in cooking mode. Any time mentioned in a step
        becomes a timer. Tap it, keep cooking.`}
      </p>
      <Heading href="why">{"Why"}</Heading>
      <p className="text-muted-foreground">
        {`Flavors doesn't reinvent anything. It solves problems I run into in
        my own kitchen, and it tries to stay out of the way. It's live at `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          flavors.app
        </a>
        {`.`}
      </p>
    </article>
  );
}
