import { fetchProperties } from "@/utils/actions";
import { PropertyCardProps } from "@/utils/types";
import { EmptyList } from "./EmptyList";
import { PropertiesList } from "./PropertiesList";

interface HomePropertiesContainerProps {
  category?: string;
  search?: string;
}

export const HomePropertiesContainer = async ({
  category,
  search,
}: HomePropertiesContainerProps) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results :("
        message="Try changing or removing some of your filters"
        btnText="Clear filters"
      />
    );
  }
  return <PropertiesList properties={properties} />
};
