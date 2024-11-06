import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";
import { BreadCrumbs } from "../BreadCrumbs";
import { CardFavoriteToggleButton } from "@/components/card/CardFavoriteToggleButton";
import { ShareButton } from "../ShareButton";
import { ImageContainer } from "../ImageContainer";
import { CardPropertyRating } from "@/components/card/CardPropertyRating";
import { BookingCalendar } from "../BookingCalendar";
import { PropertyDetails } from "../PropertyDetails";
import { UserInfo } from "../UserInfo";
import { Separator } from "@/components/ui/separator";
import { Description } from "../Description";

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}

async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) {
    redirect("/");
  }
  const { bedrooms, baths, beds, guests, description } = property;
  const { firstName, profileImage } = property.profile;
  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton name={property.name} propertyId={property.id} />
          <CardFavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <CardPropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={{ baths, bedrooms, beds, guests }} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Description description={description} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
}

export default PropertyDetailsPage;
