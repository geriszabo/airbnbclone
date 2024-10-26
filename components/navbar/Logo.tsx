import { Tent } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Logo = () => {
  return <Button size="icon" asChild >
    <Link href="/">
    <Tent className="w-16 h-16" />
    </Link>
  </Button>
};
