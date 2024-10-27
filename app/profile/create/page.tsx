import { FormContainer } from "@/components/form/FormContainer";
import { FormInput } from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/SubmitButton";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";

  const firstName = formData.get("firstName") as string;
  if(firstName !== "geci") {
    return {message: "Nem geci a neved bazmeg????"}
  }
  return { message: "Profile Created" };
};

function CreateProfilePage() {
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

const createProfileInputFields = [
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
