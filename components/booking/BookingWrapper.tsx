"use client"

import { useProperty } from "@/utils/store";
import { Booking } from "@/utils/types";
import { useEffect } from "react";
import { BookingContainer } from "./BookingContainer";
import { BookingCalendar } from "./BookingCalendar";

interface BookingWrapperProps {
  propertyId: string;
  price: number;
  bookings: Booking[];
}

const BookingWrapper = ({
  bookings,
  price,
  propertyId,
}: BookingWrapperProps) => {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);

  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
};

export default BookingWrapper;
