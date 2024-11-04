import { CardsLoading } from "@/components/card/CardsLoading";
import { HomeCategoriesList } from "@/components/home/HomeCategoriesList";
import { HomePropertiesContainer } from "@/components/home/HomePropertiesContainer";
import { Suspense } from "react";

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
      <Suspense fallback={<CardsLoading/>} >

      <HomePropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
        />
        </Suspense>
    </section>
  );
}

export default HomePage;
