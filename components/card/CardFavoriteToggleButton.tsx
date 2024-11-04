import { Heart } from "lucide-react"
import { Button } from "../ui/button"


interface CardFavoriteToggleButtonProps {
  propertyId: string
}

export const CardFavoriteToggleButton = ({propertyId}: CardFavoriteToggleButtonProps) => {
  return (
    <Button size="icon" variant="outline" className="p2 cursor-pointer"  >
      <Heart/>
    </Button>
  )
}
