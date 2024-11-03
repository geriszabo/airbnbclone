import { FormInput } from "@/components/form/FormInput"
import { FormContainer } from "@/components/form/FormContainer"
import { createPropertyAction } from "@/utils/actions"
import { SubmitButton } from "@/components/form/SubmitButton"
import { PriceInput } from "@/components/form/PriceInput"
import { FormCategoriesInput } from "@/components/form/FormCategoriesInput"
import { TextAreaInput } from "@/components/form/TextAreaInput"
import { FormCountriesInput } from "@/components/form/FormCountriesInput"
import { ImageInput } from "@/components/form/ImageInput"



export default function CreatePropertyPage() {
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">
            create property
        </h1>
        <div className="border p-8 rounded">
            <h3 className="text-lg mb-4 font-medium" > General Info</h3>
            <FormContainer action={createPropertyAction} title="Create Property Page" >
                <div className="grid md:grid-cols-2 gap-8 mb-4">
                    <FormInput name="name" type="text" label="Name (20 limit)" defaultValue="Cabin in Austria" />
                    <FormInput name="tagline" type="text" label="Tagline (20 limit)" defaultValue="Dream Getaway Awaits You Here" />
                    <PriceInput/>
                    <FormCategoriesInput/>
                </div>
                    <TextAreaInput name="description" labelText="Description 10-100 words)" />
                    <div className="grid sm:grid-cols-2 gap-8 mt-4">
                        <FormCountriesInput/>
                        <ImageInput/>
                    </div>
                <SubmitButton text="create rental" className="mb-12"/>
            </FormContainer>
        </div>
    </section>
  )
}
