import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface TextAreaInputProps {
  name: string;
  labelText?: string;
  defaultValue?: string;
}

export const TextAreaInput = ({
  name,
  defaultValue,
  labelText,
}: TextAreaInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || defaultText}
        rows={5}
        required
        className="leading-loose resize-none"
      />
    </div>
  );
};

const defaultText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit et quia adipisci reiciendis ipsam necessitatibus, harum porro est veritatis architecto, officia quibusdam ea delectus molestias saepe fugiat nostrum. Quos?";
