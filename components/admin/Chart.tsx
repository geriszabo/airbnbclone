"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { House } from "lucide-react";

interface ChartProps {
  data: {
    date: string;
    count: number;
  }[];
}

const chartConfig = {
  count: {
    label: "Bookings",
    icon: House,
  },
} satisfies ChartConfig;

export const Chart = ({ data }: ChartProps) => {
  return (
    <section className="mt-24">
      <h1 className="text-4xl font-semibold text-center">Monthly Bookings</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0,3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="#e11d48" radius={2} barSize={25}/>
        </BarChart>
      </ChartContainer>
    </section>
  );
};
