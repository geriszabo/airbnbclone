import { NavbarSearch } from "./NavbarSearch";
import { LinksDropdown } from "./LinksDropdown";
import { DarkMode } from "./DarkMode";
import { Logo } from "./Logo";
import { Suspense } from "react";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavbarSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};
