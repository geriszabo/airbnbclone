import { Profile } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import db from "./db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export const getImageUrl = async (
  image: File,
  usecase: "profile-image" | "property-image"
) => {
  const imageBuffer = await image.arrayBuffer();
  const imageArray = Array.from(new Uint8Array(imageBuffer));
  const imageData = Buffer.from(imageArray);

  //Convert to base64
  const imageBase64 = imageData.toString("base64");

  //Make request to cloudinary
  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder:
          usecase === "profile-image" ? "home-away" : "home-away-properties",
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Image upload failed at Cloudinary");
  }
};

const extractCloudinaryId = (
  url: string | undefined,
  folder: string
): string | undefined => {
  const match = url?.match(new RegExp(`${folder}/[^.]*`));
  return match ? match[0] : undefined;
};

const deleteImageFromCloudinary = async (imageUrl: string, folder: string) => {
  const imageId = extractCloudinaryId(imageUrl, folder);
  if (!imageId) {
    throw new Error("Error while extracting image id");
  }
  try {
    cloudinary.uploader.destroy(imageId);
  } catch (error) {
    throw new Error(
      `Error deleting image from Cloudinary: ${
        error instanceof Error ? error.message : "file deletion error"
      }`
    );
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
  if (!user || !user.profileImage) {
    throw new Error("Deleting profile image: This user does not exist or has no profile picture");
  }
  await deleteImageFromCloudinary(user.profileImage, "home-away")
};

export const deletePropertyImageFromCloudinary = async (propertyId: string) => {
    const property = await db.property.findUnique({
      where: {
        id: propertyId,
      },
    });
  if(!property || !property.image) {
    throw new Error("Deleting property image: This property does not exist or has no image");

  }
  await deleteImageFromCloudinary(property.image, "home-away-properties")
};
