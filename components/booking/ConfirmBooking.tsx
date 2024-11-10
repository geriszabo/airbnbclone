"use client"

import { useProperty } from "@/utils/store"
import { SignInButton, useAuth } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { FormContainer } from "../form/FormContainer"
import { SubmitButton } from "../form/SubmitButton"
import { createBookingAction } from "@/utils/actions"


export const ConfirmBooking = () => {
  const {userId} = useAuth()
  const {propertyId, range} = useProperty(state => state)
  const checkIn = range?.from
  const checkOut = range?.to
  if(!checkIn || !checkOut) {
    return null
  }
  if(!userId) {
    return <SignInButton mode="modal" >
      <Button type="button" className="w-full" >
        Sign In to Complete Booking
      </Button>
    </SignInButton>
  }

  const createBooking = createBookingAction.bind(null, {propertyId, checkIn, checkOut})
  return (
    <section>
      <FormContainer action={createBooking} title="Complete booking" >
        <SubmitButton text="Reserve" className="w-full"/>
      </FormContainer>
    </section>
  )
}