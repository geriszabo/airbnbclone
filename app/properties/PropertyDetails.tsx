import { formatQuantity } from "@/utils/format";

interface PropertyDetailsProps {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
}

export const PropertyDetails = ({
  details: { baths, bedrooms, beds, guests },
}: PropertyDetailsProps) => {
  return (
    <p className="text-md font-lignt">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot; </span>
      <span>{formatQuantity(baths, "bath")} &middot; </span>
      <span>{formatQuantity(guests, "guest")} &middot; </span>
      <span>{formatQuantity(beds, "bed")}</span>
    </p>
  );
};
