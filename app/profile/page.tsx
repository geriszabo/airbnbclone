import { FormContainer } from "@/components/form/FormContainer";
import {
  updateProfileAction,
  fetchProfile,
  updateProfileImageAction,
} from "@/utils/actions";
import { FormInput } from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import { Profile } from "@prisma/client";
import { ImageInputContainer } from "@/components/form/ImageInputContainer";
import { createProfileInputFields } from "@/utils/inputfields";

type ProfileWithoutDates = Omit<Profile, "createdAt" | "updatedAt">;

async function ProfilePage() {
  const profile = (await fetchProfile()) as Profile;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, ...restProfile } =
    profile as Profile;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          text="Update Profile Image"
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
        />
        <FormContainer title="Update Profile" action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {createProfileInputFields.map((field) => (
              <FormInput
                key={field.name}
                name={field.name}
                type="text"
                label={field.label}
                defaultValue={
                  restProfile[field.name as keyof ProfileWithoutDates]
                }
              />
            ))}
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
