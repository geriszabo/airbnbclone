import { formattedCountries } from "@/utils/countries";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const name = "country";

interface FormCountriesInputProps {
  defaultValue?: string;
}

export const FormCountriesInput = ({
  defaultValue,
}: FormCountriesInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <span className="flex items-center gap-2">
                {country.flag} {country.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
