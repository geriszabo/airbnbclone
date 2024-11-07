import { Profile } from "@prisma/client";

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
  