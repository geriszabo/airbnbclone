import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/SubmitButton";
import { fetchFavoriteId } from "@/utils/actions";
import { CardFavoriteToggleForm } from "./CardFavoriteToggleForm";

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
  const favoriteId = await fetchFavoriteId({ propertyId });
  return (
    <CardFavoriteToggleForm
      favoriteId={favoriteId}
      propertyId={propertyId}
    ></CardFavoriteToggleForm>
  );
};
