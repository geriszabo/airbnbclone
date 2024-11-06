import { Amenity } from "@/utils/amenities";
import { Title } from "./Title";
import { CircleCheckBig } from "lucide-react";

interface AmenitiesProps {
  amenities: string;
}
export const Amenities = ({ amenities }: AmenitiesProps) => {
  const amentiesList: Amenity[] = JSON.parse(amenities);
  const noAmenities = amentiesList.every((amenity) => !amenity.selected);
  if (noAmenities) {
    return null;
  }

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amentiesList.map((amenity) => {
          if (!amenity.selected) {
            return null;
          }
          return (
            <div className="flex items-center gap-x-2 mb-2" key={amenity.name}>
              <CircleCheckBig size={18} strokeWidth={1} />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
