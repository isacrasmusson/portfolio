import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="block font-medium no-underline leading-none">
        Isac Rasmusson
      </Link>
      <span className="font-medium text-muted-foreground">
        Fullstack Developer
      </span>
    </div>
  );
};

export { Logo };
