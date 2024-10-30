import { FormInput } from "@/components/form/FormInput"
import { FormContainer } from "@/components/form/FormContainer"
import { createPropertyAction } from "@/utils/actions"
import { SubmitButton } from "@/components/form/SubmitButton"



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
                </div>
                <SubmitButton text="create rental" className="mb-12"/>
            </FormContainer>
        </div>
    </section>
  )
}
