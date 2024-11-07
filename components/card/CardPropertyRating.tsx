import { Star } from "lucide-react"

interface CardPropertyRatingProps {
  propertyId: string,
  inPage: boolean
}

export const CardPropertyRating = ({inPage}: CardPropertyRatingProps) => {
  const rating = 1.1
  const count = 100

  const className = `flex gap-1 items-center ${inPage ? "text-md": "text-xs"}`
  const countText = count > 1 ? "reviews" : "review"
  const countValue = `(${count}) ${inPage ? countText : ""}`
  return (
    <span className={className} >
      <Star size={12} />
      {rating} {countValue}
    </span>
  )
}
