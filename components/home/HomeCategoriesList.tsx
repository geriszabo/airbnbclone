import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { categories } from "@/utils/categories";
import Link from "next/link";

interface HomeCategoriesListProps {
  category?: string;
  search?: string;
}

export const HomeCategoriesList = ({
  category,
  search,
}: HomeCategoriesListProps) => {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <section>
      <ScrollArea className="py-6" draggable={true}  >
        <div className="flex gap-x-4">
          {categories.map((propertyCategory) => {
            const isActive = propertyCategory.label === category;
            return (
              <Link
                key={propertyCategory.label}
                href={`/?category=${propertyCategory.label}${searchTerm}`}
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${
                    isActive ? "text-primarty" : ""
                  }`}
                >
                  <propertyCategory.icon className="w-5 h-5" />
                  <p className="capitalize text-sm mt-1">
                    {propertyCategory.label}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
