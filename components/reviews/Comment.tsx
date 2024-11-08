"use client"

import { useState } from "react";
import { Button } from "../ui/button";

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const longComment = comment.split(" ").length > 50;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}` : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};
