"use client";

import { Button } from "../ui/button";
import { FormContainer } from "../form/FormContainer";
import { createReviewAction } from "@/utils/actions";
import { TextAreaInput } from "../form/TextAreaInput";
import { SubmitButton } from "../form/SubmitButton";
import { RatingInput } from "./RatingInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";

interface SubmitReviewProps {
  propertyId: string;
}

export const SubmitReview = ({ propertyId }: SubmitReviewProps) => {
  const [open, setOpen] = useState(false);

  //We need this to be able to close the component from inside the FormContainer
  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="mt-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Leave a review</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How did you like it here? </DialogTitle>
            <DialogDescription>
              Rate this property on a scale of 5, write an honest feedback.
            </DialogDescription>
            <FormContainer
              onSuccess={handleClose}
              title="Submit a review"
              action={createReviewAction}
            >
              <input type="hidden" name="propertyId" value={propertyId} />
              <RatingInput name="rating" />
              <TextAreaInput
                name="comment"
                labelText="your thoughts on this property"
                defaultValue="Amazing place"
              />
              <SubmitButton text="Submit" className="mt-4" />
            </FormContainer>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
