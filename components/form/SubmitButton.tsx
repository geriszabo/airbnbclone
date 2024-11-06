"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";
import { Heart, RefreshCw } from "lucide-react";

interface SubmitButtonProps {
  text?: string;
  className?: ButtonProps["className"];
  size?: ButtonProps["size"];
}

export const SubmitButton = ({
  text = "submit",
  className = "",
  size = "lg",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  function renderIcon() {
    if (!pending) {
      return isFavorite ? <Heart fill="black" /> : <Heart />;
    }
    return <RefreshCw className="animate-spin" />;
  }

  const favoriteIcon = renderIcon();

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-y2 cursor-pointer"
    >
      {favoriteIcon}
    </Button>
  );
};
