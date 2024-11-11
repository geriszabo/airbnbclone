import { User } from "lucide-react"
import Image from "next/image"

interface UserIconProps {
  profileImage: string | null | undefined
  
}

export const UserIcon = ({profileImage}: UserIconProps) => {
 
  if(profileImage) {
    return <Image  src={profileImage} alt="user profile image" width={6} height={6} className="w-6 h-6 rounded-full" />
  }
  return (
    <User size={36}  className="bg-primary text-white rounded-full" />
  )
}
