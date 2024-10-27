import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}

export const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label ?? name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
