import { Profile } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import db from "./db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export const getImageUrls = async (image: File) => {
  const imageBuffer = await image.arrayBuffer();
  const imageArray = Array.from(new Uint8Array(imageBuffer));
  const imageData = Buffer.from(imageArray);

  //Convert to base64
  const imageBase64 = imageData.toString("base64");

  //Make request to cloudinary
  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      { folder: "home-away" }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Image upload failed at Cloudinary");
  }
};

const deleteCurrentImageFromCloudinary = async (profile: Profile) => {
  try {
    const currentProfileImage = profile.profileImage.match(/home-away\/[^.]*/);
    const currentProfileImageId = currentProfileImage
      ? currentProfileImage[0]
      : undefined;
    if (!currentProfileImageId) return;
    await cloudinary.uploader.destroy(currentProfileImageId);
  } catch {
    throw new Error("Error while deleting image");
  }
};

export const deleteCurrentProfileImageFromCloudinary = async (
  userId: string
) => {
  const user = await db.profile.findUnique({
    where: {
      clerkId: userId,
    },
  });
  if(!user) {
    throw new Error("Deleting profile image: This user does not exist")
  }
  await deleteCurrentImageFromCloudinary(user);
};
