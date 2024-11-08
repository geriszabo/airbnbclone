import { Star } from "lucide-react"


interface RatingProps {
  rating: number
}
export const Rating = ({rating}: RatingProps) => {
  const stars = Array.from({length: 5}, (_, index)=> index +1 <= rating)
  return (
   <div className="flex items-center gap-x-1" >
    {stars.map((isStar, index) => {
      const className = `w-3 h-3`
      return isStar ? <Star className={className} key={index} fill="gold" strokeWidth={1} />  : <Star className={className} key={index} strokeWidth={1} />
    })}
   </div>
  )
}
