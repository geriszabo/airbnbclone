import { User } from "lucide-react"
import { fetchProfileImage } from "@/utils/actions"
import Image from "next/image"

export const UserIcon = async () => {
  const profileImage = await fetchProfileImage()
  if(profileImage) {
    return <Image  src={profileImage} alt="user profile image" width={6} height={6} className="w-6 h-6 rounded-full" />
  }
  return (
    <User size={36}  className="bg-primary text-white rounded-full" />
  )
}
