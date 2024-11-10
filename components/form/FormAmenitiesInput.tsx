"use client"

import { amenities, Amenity } from "@/utils/amenities";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface FormAmenitiesInputProps {
  defaultValue?: Amenity[];
}

export const FormAmenitiesInput = ({
  defaultValue,
}: FormAmenitiesInputProps) => {
  const amenitiesWithIcons = defaultValue?.map(({name, selected}) => {
    return {name, selected, icon: amenities.find(amenity => amenity.name === name)!.icon}
  })
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    amenitiesWithIcons || amenities
  );

  function handleChange(amenity: Amenity) {
    setSelectedAmenities((prevAmenity) => {
      return prevAmenity.map((prevAmenity) => {
        if (prevAmenity.name === amenity.name) {
          return { ...prevAmenity, selected: !prevAmenity.selected };
        }
        return prevAmenity;
      });
    });
  }

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div className="flex items-center space-x-2" key={amenity.name}>
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <Label
                htmlFor={amenity.name}
                className="font-medium text-sm leading-none capitalize flex gap-x-2 items-cnter"
              >
                {amenity.name} <amenity.icon className="w-4 h-4" />
              </Label>
            </div>
          );
        })}
      </div>
    </section>
  );
};
