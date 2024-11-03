import Link from "next/link";
import { Button } from "../ui/button";

interface EmptyListProps {
  heading?: string;
  message?: string;
  btnText?: string;
}

export const EmptyList = ({
  btnText = "back home",
  message = "Keep exploring our properties",
  heading = "No items in the list",
}: EmptyListProps) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 capitalize" size="lg">
        <Link href="/"> {btnText} </Link>
      </Button>
    </div>
  );
};
