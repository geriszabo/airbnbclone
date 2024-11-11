import { auth } from "@clerk/nextjs/server";
import { NavbarItems } from "./NavbarItems";
import { fetchProfileImage } from "@/utils/actions";

export const Navbar = async () => {
  const { userId } = await auth();
  const profileImage = await fetchProfileImage()

  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  return (
    <nav className="border-b">
      {/* <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8"> */}
       <NavbarItems isAdminUser={isAdminUser} profileImage={profileImage} />
      {/* </div> */}
    </nav>
  );
};
