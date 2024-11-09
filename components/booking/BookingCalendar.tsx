"use client";

import { defaultSelected, generateBlockedPeriods, generateDateRange, generateDisabledDates } from "@/utils/calendar";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { useProperty } from "@/utils/store";
import { useToast } from "@/hooks/use-toast";

export const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings)
  const {toast} = useToast()

  const blockedPeriods = generateBlockedPeriods({
    bookings, today: currentDate
  })

  const unavailiableDates = generateDisabledDates(blockedPeriods)

  useEffect(() => {
    const selectedRange = generateDateRange(range)
    selectedRange.some(date => {
      if(unavailiableDates[date]) {
        setRange(defaultSelected)
        toast({title: "Booking Calendar",
          description: "Some dates are booked. Please select different dates"
        })
        return true
      }
      return false
    })
    useProperty.setState({ range });
  }, [range, toast, unavailiableDates]);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  );
};
