import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { PopoverContent } from "@radix-ui/react-popover"
import { Linkedin, Mail, Twitter } from "lucide-react"
import {EmailShareButton, LinkedinShareButton, TwitterShareButton} from "react-share"

interface ShareButtonProps {
    propertyId: string,
    name: string
}
export const ShareButton = ({name, propertyId}: ShareButtonProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
    const shareLink = `${baseUrl}/properties/${propertyId}`
    
  return (
<Popover>
    <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2"  />
    </PopoverTrigger>
    <PopoverContent side="top" align="end" sideOffset={10} className="flex items-center gap-x-2 justify-center w-full" >
    <TwitterShareButton url={shareLink} title={name} >
        <Twitter />
    </TwitterShareButton>
    <LinkedinShareButton url={shareLink} title={name} >
        <Linkedin />
    </LinkedinShareButton>
    <EmailShareButton url={shareLink} title={name} >
        <Mail />
    </EmailShareButton>
    </PopoverContent>
</Popover>
  )
}
