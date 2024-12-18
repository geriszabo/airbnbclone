import { categories } from "@/utils/categories";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const name = "category";

export const FormCategoriesInput = ({
  defaultValue,
}: {
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>Categories</Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => {
            return (
              <SelectItem key={category.label} value={category.label}>
                <span className="flex items-center gap-2">
                  <category.icon size={16} />
                  {category.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
