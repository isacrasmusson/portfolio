import { DarkModeToggle } from "@/components/global/DarkModeToggle";
import { Logo } from "@/components/global/Header/components/Logo/Logo";

import { cn } from "@/lib/utils";

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={cn("flex flex-col gap-4 md:gap-12", className)}>
      <div className="flex justify-between items-center overflow-hidden">
        <section>
          <Logo />
        </section>

        <section>
          <DarkModeToggle />
        </section>
      </div>
    </header>
  );
};

export { Header };
