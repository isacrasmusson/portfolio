import Link from "next/link";

const Logo = () => {
  return (
    <div className="leading-tight">
      <Link href="/" className="block font-medium no-underline">
        Isac Rasmusson
      </Link>
      <span className="text-sm text-muted-foreground">
        Software Engineer · IKEA
      </span>
    </div>
  );
};

export { Logo };
