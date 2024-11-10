import {
  Caravan,
  Container,
  Factory,
  FlameKindling,
  House,
  LucideIcon,
  MountainSnow,
  Tent,
  TentTree,
  Truck,
  WandSparkles,
} from "lucide-react";

type Category = {
  label: CategoryLabel;
  icon: LucideIcon;
};

export type CategoryLabel =
  | "cabin"
  | "tent"
  | "airstream"
  | "cottage"
  | "container"
  | "caravan"
  | "tiny"
  | "magic"
  | "warehouse"
  | "lodge";

export const categories: Category[] = [
  {
    label: "cabin",
    icon: FlameKindling,
  },
  {
    label: "airstream",
    icon: Truck,
  },
  {
    label: "tent",
    icon: TentTree,
  },
  {
    label: "warehouse",
    icon: Factory,
  },
  {
    label: "cottage",
    icon: MountainSnow,
  },
  {
    label: "magic",
    icon: WandSparkles,
  },
  {
    label: "container",
    icon: Container,
  },
  {
    label: "caravan",
    icon: Caravan,
  },

  {
    label: "tiny",
    icon: House,
  },
  {
    label: "lodge",
    icon: Tent,
  },
];


export const tableRows = [
  "Property Name",
  "Country",
  "Nights",
  "Total",
  "Check In",
  "Check Out",
  "Actions",
];
