"use client";

import { defaultSelected } from "@/utils/calendar";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { useProperty } from "@/utils/store";

export const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
    />
  );
};
