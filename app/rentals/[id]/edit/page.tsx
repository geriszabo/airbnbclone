import { FormAmenitiesInput } from "@/components/form/FormAmenitiesInput";
import { FormCategoriesInput } from "@/components/form/FormCategoriesInput";
import { FormContainer } from "@/components/form/FormContainer";
import { FormCounterInput } from "@/components/form/FormCounterInput";
import { FormCountriesInput } from "@/components/form/FormCountriesInput";
import { FormInput } from "@/components/form/FormInput";
import { ImageInputContainer } from "@/components/form/ImageInputContainer";
import { PriceInput } from "@/components/form/PriceInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import { TextAreaInput } from "@/components/form/TextAreaInput";
import {
  fetchPropertyDetails,
  updateProfileImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import { Amenity } from "@/utils/amenities";
import { Profile, Property } from "@prisma/client";
import { redirect } from "next/navigation";

interface EditRentalPageProps {
  params: {
    id: string;
  };
}

async function EditRentalPage({ params }: EditRentalPageProps) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) {
    redirect("/");
  }
  const defaultAmenities: Amenity[] = JSON.parse(property.amenities)
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Edit Property</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updateProfileImageAction}
          image={property.image}
        >
          <input type="hiden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer title="Update Property" action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="name"
              type="text"
              label="Tagline (30 limit)"
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <FormCategoriesInput defaultValue={property.category} />
            <FormCountriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={property.description}
            labelText="Description (10 - 100 words)"
          />
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accomodation Details
          </h3>
          {roomDetails.map((room) => (
            <FormCounterInput
              key={room}
              detail={room}
              defaultValue={property[room]}
            />
          ))}

          <h3 className="text-lg mt-10 mb-6 font-medium" >Amenities</h3>
          <FormAmenitiesInput defaultValue={defaultAmenities}/>

          <SubmitButton text="edit property" className="mt-12"/>
        </FormContainer>
      </div>
    </section>
  );
}

export default EditRentalPage;

const roomDetails = ["guests", "bedrooms", "beds", "baths"] as const;
