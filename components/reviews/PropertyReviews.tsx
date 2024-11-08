import { fetchPropertyReviews } from "@/utils/actions"
import { Title } from "../properties/Title"
import { ReviewCard } from "./ReviewCard"


interface PropertyReviewsProps {
  propertyId: string
}

export const PropertyReviews = async ({propertyId}: PropertyReviewsProps) => {
  const reviews = await fetchPropertyReviews(propertyId)
  if(reviews.length < 1) {
    return
  }

  return (
   <div className="mt-8">
    <Title text="Reviews"/>
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      {reviews.map(review => {
        const {comment, rating, id, profile: {firstName: name, profileImage: image}} = review

        return <ReviewCard key={id} reviewInfo={{comment, rating, name, image}} />
      })}
    </div>
   </div>
  )
}
