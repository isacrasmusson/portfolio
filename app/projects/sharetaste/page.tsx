import type { Metadata } from "next";
import { Heading } from "@/components/global/Article/Heading";

export const metadata: Metadata = {
  title: "Why I'm Building Sharetaste",
  description:
    "Cooking is rewarding, but it's also frustrating at times. I've faced the same problems you probably have—losing track of recipes, struggling to adjust portions, or staring at an empty fridge with no idea what to cook. Sharetaste is my attempt to solve these problems in a way that makes sense. Here's the story behind it.",
};

export default function Sharetaste() {
  return (
    <article className="p-page">
      <h1 className="mb-8 text-xl font-newsreader italic">
        {"Why I'm Building Sharetaste"}
      </h1>
      <p className="text-muted-foreground">
        {`Cooking is rewarding, but it's also frustrating at times. I've faced the
        same problems you probably have, losing track of recipes, struggling to
        adjust portions, or staring at an empty fridge with no idea what to
        cook. Sharetaste is my attempt to solve these problems. It's still a
        work in progress, but here's what I'm aiming to build and why.`}
      </p>
      <Heading href="personalized-recipe-sharing">
        {"Sharing Recipes Without the Hassle"}
      </Heading>
      <p className="text-muted-foreground">
        {`Sharing recipes has always felt clunky. Screenshots, messy links, or
        notes in random places, it's frustrating. I'm building a way to share
        recipes directly, with full control over who sees them. Whether you want
        to keep them private, share with a few friends, or make them public.`}
      </p>
      {/* <Image
        src={"/instructions.png"}
        width={800}
        height={500}
        alt="A gecko"
        className="mt-8 size-full rounded-xl shadow-xl"
      /> */}
      <Heading href="auto-quantities">
        {"Scaling Recipes Without the Headaches"}
      </Heading>
      <p className="text-muted-foreground">
        {`Adjusting portions is always trickier than it should be. Doubling
        ingredients seems easy enough until you hit something like “3/4 cup” or
        “1/2 dl milk.” Sharetaste will handle that math for you, so every
        ingredient updates seamlessly within the recipe steps.`}
      </p>
      <Heading href="weekly-meal-plans">
        {"Making Meal Planning Less Stressful"}
      </Heading>
      <p className="text-muted-foreground">
        {`Meal planning is one of the most tedious parts of cooking. I want
        Sharetaste to fix that by offering two options: you can let it generate
        weekly plans automatically based on your recipes or new suggestions, or
        you can plan meals manually with an easy drag-and-drop interface. It's
        all about saving time while keeping variety and giving you control over
        your week.`}
      </p>
      <Heading href="discover-culinary-treasures">
        {"Finding Recipes Worth Trying"}
      </Heading>
      <p className="text-muted-foreground">
        {`Discovering new recipes shouldn't feel like a chore. What if there was
        an IMDb for food? A place where you could explore recipes, cuisines, and
        even the chefs behind them? I'm working on a feature to help you dive
        into recipes from around the world, discover trending dishes, and
        explore food in the same way we explore movies or shows. It's a small
        step, but it's kept me inspired to cook, and I hope it'll do the same
        for others.`}
      </p>
      <Heading href="technology-meets-convenience">
        {"Building Something Useful"}
      </Heading>
      <p className="text-muted-foreground">
        {`Sharetaste isn't about reinventing the wheel. It's about solving real
        problems I've faced in my own kitchen—problems I know many others deal
        with too. From better sharing to smarter planning, it's all about making
        cooking simpler and more enjoyable, without losing the creativity that
        makes it special. The app isn't finished yet, but every feature is being
        built with care and a focus on real, practical needs.`}
      </p>
      <br />
      <p className="text-muted-foreground">
        {`Sharetaste is my way of blending the love of cooking with tools that
        actually make life easier. It's not perfect, and it's still evolving,
        but I'm excited to keep improving it. Whether you're a seasoned chef or
        just starting out, I hope it inspires you to enjoy cooking even more.
        Thanks for being part of the journey.`}
      </p>
    </article>
  );
}
