"use client";

import { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface FormCategoriesInputProps {
  detail: string;
  defaultValue?: number;
}

export const FormCounterInput = ({
  detail,
  defaultValue,
}: FormCategoriesInputProps) => {
  const [count, setCount] = useState(defaultValue || 0);
  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decreaseCount() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />
      <CardHeader className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h2 className="capitalize font-medium">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={decreaseCount}
            >
              <Minus className="text-primary" />
            </Button>
            <span className="text-xl font-bold w-5 text-center">{count}</span>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={increaseCount}
            >
              <Plus className="text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
