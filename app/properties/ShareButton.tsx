"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Linkedin, Mail, Share, Twitter } from "lucide-react";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

interface ShareButtonProps {
  propertyId: string;
  name: string;
}
export const ShareButton = ({ name, propertyId }: ShareButtonProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${baseUrl}/properties/${propertyId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <Share />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full p-2 rounded-sm shadow-md"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <Twitter strokeWidth={1} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <Linkedin strokeWidth={1} />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <Mail strokeWidth={1} />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
};
