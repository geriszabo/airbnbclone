import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/FormInput";

const createProfileAction = async(formData: FormData) =>{
    "use server"

    const firstName = formData.get("firstName")
    console.log({firstName})
}

function CreateProfilePage() {
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize" >new user</h1>
        <div className="border p-8 rounded-md max-w-lg">
            <form action={createProfileAction}>
                <FormInput name="firstName" type="text" label="First Name"/>
                <Button type="submit" size="lg">Create Profile</Button>
            </form>
        </div>
    </section>
  )
}

export default CreateProfilePage