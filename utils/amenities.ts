import {
  Accessibility,
  Bike,
  Car,
  ChevronUp,
  Cigarette,
  Coffee,
  Dog,
  Dumbbell,
  Flame,
  Home,
  LucideIcon,
  Monitor,
  Shield,
  Sun,
  Thermometer,
  ThermometerSnowflake,
  Tv,
  Utensils,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react";

export type Amenity = {
  name: string;
  icon: LucideIcon;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: "Wi-Fi", icon: Wifi, selected: false },
  { name: "Parking", icon: Car, selected: false },
  { name: "Pool", icon: Sun, selected: false },
  { name: "Gym", icon: Dumbbell, selected: false },
  { name: "Air Conditioning", icon: ThermometerSnowflake, selected: false },
  { name: "Heating", icon: Thermometer, selected: false },
  { name: "Pet-Friendly", icon: Dog, selected: false },
  { name: "Washer", icon: WashingMachine, selected: false },
  { name: "Dryer", icon: Wind, selected: false },
  { name: "Kitchen", icon: Utensils, selected: false },
  { name: "TV", icon: Tv, selected: false },
  { name: "Workspace", icon: Monitor, selected: false },
  { name: "Elevator", icon: ChevronUp, selected: false },
  { name: "Balcony", icon: Home, selected: false },
  { name: "Fireplace", icon: Flame, selected: false },
  { name: "Wheelchair Accessible", icon: Accessibility, selected: false },
  { name: "Smoking Allowed", icon: Cigarette, selected: false },
  { name: "Breakfast Included", icon: Coffee, selected: false },
  { name: "Security", icon: Shield, selected: false },
  { name: "Bicycle Storage", icon: Bike, selected: false },
];
