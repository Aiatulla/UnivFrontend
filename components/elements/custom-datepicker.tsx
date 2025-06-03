import { DatePicker, DateValue } from "@heroui/react";

type CustomDatePickerProps = {
  label?: string;
  className?: string;
  onChange?: (date: DateValue | null) => void;
};

export const CustomDatePicker = ({
  label,
  className,
  onChange,
}: CustomDatePickerProps) => {
  return (
    <div className={className}>
      <DatePicker
        onChange={onChange}
        label={label}
        labelPlacement="outside"
        classNames={{
          label: "font-medium",
          base: "text-red-500",
          inputWrapper:
            "rounded-[8px] border bg-white hover:bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors duration-150 ease-in-out",
        }}
      />
    </div>
  );
};
