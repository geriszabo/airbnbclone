import { formatCurrency } from "@/utils/format";
import { PropertyCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { CardPropertyRating } from "./CardPropertyRating";
import { CardFavoriteToggleButton } from "./CardFavoriteToggleButton";
import { CardCountryFlagAndName } from "./CardCountryFlagAndName";

export const PropertyCard = ({
  country,
  id: propertyId,
  image,
  name,
  price,
  tagline,
}: PropertyCardProps) => {
  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md ">
          <Image
            src={image}
            fill
            sizes="(max-width:768px) 100vw 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          <CardPropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">{formatCurrency(price)}</span>/
            night
          </p>
          <CardCountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className="absolute top-5 z-5 right-5">
        <CardFavoriteToggleButton propertyId={propertyId} />
      </div>
    </article>
  );
};
