import Image from "next/image";

interface ImageContainerProps {
  mainImage: string;
  name: string;
}
export const ImageContainer = ({ mainImage, name }: ImageContainerProps) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
       sizes="100vw"
       fill
        src={mainImage}
        alt={name}
        className="object-cover rounded"
        priority
      />
    </section>
  );
};
