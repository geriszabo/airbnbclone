"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

export const SignOutLink = () => {
  const { toast } = useToast();
  function handleLogout() {
    toast({ description: "You have been signed out" });
  }
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};
