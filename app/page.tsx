import { HomeCategoriesList } from "@/components/home/HomeCategoriesList";
import { HomePropertiesContainer } from "@/components/home/HomePropertiesContainer";

interface HomePageProps {
  searchParams: {
    category?: string;
    search?: string;
  };
}

function HomePage({ searchParams }: HomePageProps) {
  return (
    <section>
      <HomeCategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <HomePropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  );
}

export default HomePage;
