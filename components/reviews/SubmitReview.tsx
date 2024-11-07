
"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FormContainer } from "../form/FormContainer";
import { createReviewAction } from "@/utils/actions";
import { TextAreaInput } from "../form/TextAreaInput";
import { SubmitButton } from "../form/SubmitButton";
import { RatingInput } from "./RatingInput";

interface SubmitReviewProps {
    propertyId: string
}

export const SubmitReview = ({propertyId}: SubmitReviewProps) => {
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)


  return <div className="mt-8">
    <Button onClick={() => setIsReviewFormVisible(prev => !prev)}>
        Leave a Review
    </Button>
    {
        isReviewFormVisible && <Card className="p-8 mt-8">
            <FormContainer title="" action={createReviewAction}  >
                <input type="hidden" name="propertyId" value={propertyId} />
                <RatingInput  name="rating" />
                <TextAreaInput name="comment" labelText="your thoughts on this property" defaultValue="Amazing place" />
                <SubmitButton text="Submit" className="mt-4" />
            </FormContainer>
        </Card>
    }
  </div>
};
