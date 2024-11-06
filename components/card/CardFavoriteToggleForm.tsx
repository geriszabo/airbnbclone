"use client"

import { usePathname } from "next/navigation";
import { FormContainer } from "../form/FormContainer";
import { CardSubmitButton } from "../form/SubmitButton";
import { toggleFavoriteAction } from "@/utils/actions";

interface CardFavoriteToggleFormProps {
  propertyId: string;
  favoriteId: string | null;
}

export const CardFavoriteToggleForm = ({
  favoriteId,
  propertyId,
}: CardFavoriteToggleFormProps) => {
  const pathName = usePathname()
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId, favoriteId, pathName
  })

  return <FormContainer title="Favorite toggle form" action={toggleAction} >
    <CardSubmitButton  isFavorite={!!favoriteId}/>
  </FormContainer>
};
