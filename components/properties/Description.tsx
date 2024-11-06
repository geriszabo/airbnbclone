"use client"

import { useState } from "react"
import { Title } from "./Title"
import { Button } from "@/components/ui/button"

interface DescriptionProps {
    description: string
}

export const Description = ({description}: DescriptionProps) => {

    const [isFullDescriptionShowing, setIsFullDescriptionShowing] = useState(false)

    const words = description.split(" ")
    const isLongDescription = words.length > 100
    
    function toggleDescription () {
        setIsFullDescriptionShowing(!isFullDescriptionShowing)
    }

    const displayedDescription = isLongDescription && !isFullDescriptionShowing ?  words.splice(0, 100).join(" ") + "..." : description
  return (
    <article className="mt-4">
        <Title text="Description"/>
        <p className="text-muted-foreground font-light leading-loose">
            {displayedDescription}
        </p>
        {isLongDescription && <Button variant="link"  className="pl-0" onClick={toggleDescription} >
           {isFullDescriptionShowing ? "Show less" : "Show more"} </Button>}
    </article>
  )
}
