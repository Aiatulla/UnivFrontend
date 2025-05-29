import clsx from "clsx";
import Paragraph from "./Paragraph";
interface InputProps {
  label?: string;
  text?: string;
  placeholder?: string;
  type: "text" | "password" | "number" | "email" | "tel";
  isRequired?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

export const CustomInput = ({
  label,
  text,
  placeholder,
  type,
  isRequired,
  inputClassName,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className="flex flex-col items-start">
      <Paragraph className="block mb-2 text-sm text-gray-800 font-medium">
        {label}
      </Paragraph>
      <input
        value={value}
        onChange={onChange}
        className={clsx(
          `w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 ease-in-out bg-[rgba(245, 245, 245, 0.5)`,
          inputClassName
        )}
        type={type}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};
