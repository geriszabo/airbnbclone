"use client";

import { FormInput } from "@/components/form/FormInput";
import { FormContainer } from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/SubmitButton";
import { PriceInput } from "@/components/form/PriceInput";
import { FormCategoriesInput } from "@/components/form/FormCategoriesInput";
import { TextAreaInput } from "@/components/form/TextAreaInput";
import { FormCountriesInput } from "@/components/form/FormCountriesInput";
import { ImageInput } from "@/components/form/ImageInput";
import { FormCounterInput } from "@/components/form/FormCounterInput";
import { FormAmenitiesInput } from "@/components/form/FormAmenitiesInput";

type RoomDetailsType = {
  label: "guests" | "bedrooms" | "beds" | "baths";
};

const roomDetails: RoomDetailsType[] = [
  { label: "baths" },
  { label: "bedrooms" },
  { label: "beds" },
  { label: "guests" },
];

export default function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium"> General Info</h3>
        <FormContainer
          action={createPropertyAction}
          title="Create Property Page"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Austria"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (20 limit)"
              defaultValue="Dream Getaway Awaits You Here"
            />
            <PriceInput />
            <FormCategoriesInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description 10-100 words)"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <FormCountriesInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accomodation Details
          </h3>
          {roomDetails.map((room) => (
            <FormCounterInput key={room.label} detail={room.label} />
          ))}
          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <FormAmenitiesInput />
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
