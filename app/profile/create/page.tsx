import { FormContainer } from "@/components/form/FormContainer";
import { FormInput } from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";
import { Profile } from "@prisma/client";
import { redirect } from "next/navigation";

async function CreateProfilePage() {
    const user = await currentUser()
    if(user?.privateMetadata?.hasProfile) {
        redirect("/")
    }
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer title="Create Profile" action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {createProfileInputFields.map((field) => (
              <FormInput
                key={field.name}
                name={field.name}
                type="text"
                label={field.label}
              />
            ))}
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;

export const createProfileInputFields: {name: keyof Profile, label: string}[] = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "username",
    label: "Username",
  },
];
