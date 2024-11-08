import { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"
import { Rating } from "../form/Rating"
import { Comment } from "./Comment"


interface ReviewCardProps {
  reviewInfo: {
    comment: string,
    rating: number,
    name: string,
    image: string
  },
  children?: ReactNode
}

export const ReviewCard = ({children, reviewInfo}: ReviewCardProps) => {
  return (
   <Card className="relative">
    <CardHeader>
      <div className="flex itmes-center">
        <Image src={reviewInfo.image} alt="profile" className="rounded-full object-cover h-12 w-12" width={25} height={25} />
        <div className="ml-4">
          <h3 className="text-sm font-bold capitalize mb-1">
            {reviewInfo.name}
          </h3>
          <Rating rating={reviewInfo.rating}/>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Comment comment={reviewInfo.comment}/>
    </CardContent>
    {/* delete button later */}
    <div className="absolute top-3 right-3">
      {children}
    </div>
   </Card>
  )
}
