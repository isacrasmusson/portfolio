import type { Metadata } from "next";
import { Heading } from "@/components/global/Article/Heading";

export const metadata: Metadata = {
  title: "Why I'm Building Flavors",
  description:
    "Cooking is rewarding, but it's also frustrating at times. I've faced the same problems you probably have—losing track of recipes, struggling to adjust portions, or staring at an empty fridge with no idea what to cook. Flavors is my attempt to solve these problems in a way that makes sense. Here's the story behind it.",
};

export default function Flavors() {
  return (
    <article className="p-page">
      <h1 className="mb-8 text-xl font-newsreader italic">
        {"Why I'm Building Flavors"}
      </h1>
      <p className="text-muted-foreground">
        {`Cooking is rewarding, but it's also frustrating at times. I've faced the
        same problems you probably have: losing track of recipes, struggling to
        adjust portions, or staring at an empty fridge with no idea what to
        cook. `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          Flavors
        </a>
        {` is my attempt to solve these problems. Here's what I'm building and
        why.`}
      </p>
      <Heading href="collecting-recipes">
        {"Collecting Recipes Without the Hassle"}
      </Heading>
      <p className="text-muted-foreground">
        {`Recipes end up everywhere: screenshots, bookmarks, notes in random
        places. Flavors lets you save a recipe from a link and automatically
        extracts the ingredients and steps, so everything you cook lives in one
        place, and you can share it with your household.`}
      </p>
      <Heading href="auto-quantities">
        {"Scaling Recipes Without the Headaches"}
      </Heading>
      <p className="text-muted-foreground">
        {`Adjusting portions is always trickier than it should be. Doubling
        ingredients seems easy enough until you hit something like “3/4 cup” or
        “1/2 dl milk.” Flavors handles that math for you, so every ingredient
        updates seamlessly within the recipe steps, whether you cook in cups or
        grams.`}
      </p>
      <Heading href="weekly-meal-plans">
        {"Making Meal Planning Less Stressful"}
      </Heading>
      <p className="text-muted-foreground">
        {`Meal planning is one of the most tedious parts of cooking. With
        Flavors you plan your week from your own recipes, and it turns the plan
        into a single consolidated shopping list. It's all about saving time
        while keeping variety and giving you control over your week.`}
      </p>
      <Heading href="cooking-mode">{"Cooking With Your Hands Full"}</Heading>
      <p className="text-muted-foreground">
        {`Following a recipe mid-cook usually means scrolling with messy hands
        and losing your place. Flavors guides you step by step, and any timing
        mentioned in a step becomes a timer you can start with a tap, so you can
        focus on the food instead of your phone.`}
      </p>
      <Heading href="technology-meets-convenience">
        {"Building Something Useful"}
      </Heading>
      <p className="text-muted-foreground">
        {`Flavors isn't about reinventing the wheel. It's about solving real
        problems I've faced in my own kitchen—problems I know many others deal
        with too. From better collecting to smarter planning, it's all about
        making cooking simpler and more enjoyable, without losing the creativity
        that makes it special. Every feature is being built with care and a
        focus on real, practical needs.`}
      </p>
      <br />
      <p className="text-muted-foreground">
        {`Flavors is my way of blending the love of cooking with tools that
        actually make life easier. It's not perfect, and it's still evolving,
        but I'm excited to keep improving it. You can try it at `}
        <a href="https://flavors.app" target="_blank" rel="noopener noreferrer">
          flavors.app
        </a>
        {`. Whether you're a seasoned chef or just starting out, I hope it
        inspires you to enjoy cooking even more.`}
      </p>
    </article>
  );
}
