import { PropertyCardProps } from "@/utils/types";
import { PropertyCard } from "../card/PropertyCard";

interface PropertiesListProps {
  properties: PropertyCardProps[];
}

export const PropertiesList = ({ properties }: PropertiesListProps) => {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property}/>
      ))}
    </section>
  );
};
