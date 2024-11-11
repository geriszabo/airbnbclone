"use client";

import { Suspense } from "react";
import { Logo } from "./Logo";
import { NavbarSearch } from "./NavbarSearch";
import { DarkMode } from "./DarkMode";
import { LinksDropdown } from "./LinksDropdown";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

interface NavbarItemsProps {
  isAdminUser: boolean;
  profileImage: string | null | undefined;
}
export const NavbarItems = ({
  isAdminUser,
  profileImage,
}: NavbarItemsProps) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="container flex flex-col gap-4 py-8">
          <div className="grid gap-4 grid-flow-col auto-cols-max justify-between">
            <Logo />
            <div className="flex gap-4 items-center">
              <DarkMode />
              <LinksDropdown
                isAdminUser={isAdminUser}
                profileImage={profileImage}
              />
            </div>
          </div>
          <Suspense>
            <NavbarSearch className="dark:bg-mted" />
          </Suspense>
        </div>
      ) : (
        <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
          <Logo />
          <Suspense>
            <NavbarSearch className="max-w-xs dark:bg-mted" />
          </Suspense>
          <div className="flex gap-4 items-center">
            <DarkMode />
            <LinksDropdown
              isAdminUser={isAdminUser}
              profileImage={profileImage}
            />
          </div>
        </div>
      )}
    </>
  );
};
