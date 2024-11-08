"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";
import { CircleX, Heart, Pencil, RefreshCw } from "lucide-react";

interface SubmitButtonProps {
  text?: string;
  className?: ButtonProps["className"];
  size?: ButtonProps["size"];
}

interface IconButtonProps {
  actionType: "edit" | "delete"
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


export const IconButton = ({actionType}: IconButtonProps) => {
  const {pending} = useFormStatus()

  const renderIcon = () => {
    switch(actionType) {
      case "edit":
      return <Pencil/>
      case "delete":
        return <CircleX stroke="salmon" />

        default: 
        const never: never = actionType
        throw new Error(`Invalid action type: ${never}`)
    }
  }

  const renderedIcon = renderIcon()
  return <Button type="submit" size="icon" variant="link" className="p-2 cursor-pointer" >
    {pending ? <RefreshCw className="animate-spin" /> : renderedIcon}
  </Button>
}