"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";

interface SubmitButtonProps {
  text?: string;
  className?: ButtonProps["className"];
  size?: ButtonProps["size"]
}

export const SubmitButton = ({
  text = "submit",
  className = "",
  size = "lg"
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
