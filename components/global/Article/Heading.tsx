import React from "react";
import { LinkIcon } from "lucide-react";

const Heading = ({
  children,
  href,
  level = 1,
}: {
  children: React.ReactNode;
  href: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  const Comp = React.createElement(
    `h${level}`,
    {
      id: href,
      style: { scrollMarginTop: 32 },
    },
    children
  );

  return (
    <a
      href={`#${href}`}
      className="group relative mb-4 mt-12 inline-block w-fit no-underline md:mt-14 font-newsreader text-xl font-medium italic"
    >
      <LinkIcon className="size-4 absolute -left-6 top-0.75 opacity-0 shadow-none outline-none transition-opacity group-hover:opacity-100 group-focus:opacity-100" />
      {Comp}
    </a>
  );
};

export { Heading };
