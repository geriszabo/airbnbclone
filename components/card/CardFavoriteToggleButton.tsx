import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/SubmitButton";

interface CardFavoriteToggleButtonProps {
  propertyId: string;
}

export const CardFavoriteToggleButton = async ({
  propertyId,
}: CardFavoriteToggleButtonProps) => {
  const { userId } = await auth();
  if (!userId) {
    return <CardSignInButton />;
  }

  return (
    <Button size="icon" variant="outline" className="p2 cursor-pointer">
      <Heart />
    </Button>
  );
};
