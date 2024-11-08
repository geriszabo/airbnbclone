"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { FormContainer } from "./FormContainer";
import { ImageInput } from "./ImageInput";
import { SubmitButton } from "./SubmitButton";
import { type actionFunction } from "@/utils/types";
import { User } from "lucide-react";

interface ImageInputContainerProps {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: ReactNode;
}

export const ImageInputContainer = ({
  action,
  image,
  name,
  text,
  children,
}: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const userIcon = (
    <User size={24} className="bg-primary rounded text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action} title="Upload Profile Image">
            {children}
            <ImageInput/>
            <SubmitButton size="sm"></SubmitButton>
          </FormContainer>
        </div>
      )}
    </div>
  );
};
