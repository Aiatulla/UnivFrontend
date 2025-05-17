import { CustomButtonProps } from "@/components/elements/CustomButton";
import clsx from "clsx";
import { Button } from '@heroui/react';

type ChipButtonSize = "sm" | "md" | "lg";
type ChipButtonVariant = "default" | "primary" | "ghost";

interface ChipButtonProps extends CustomButtonProps {
  className?: string;
  size?: ChipButtonSize;
  ButtonVariant?: ChipButtonVariant;
  active?: boolean;
}

// Tailwind size classes
const sizes: Record<ChipButtonSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm rounded-[20px]",
  lg: "px-6 py-3 text-base",
};

// Tailwind variant classes
const variants: Record<ChipButtonVariant, string> = {
  default: "bg-transparent border border-gray-300 text-gray-800",
  primary: "bg-blue-600 text-white border border-blue-600",
  ghost: "bg-transparent border-none text-gray-600",
};

export const ChipButton = ({
  size = "sm",
  ButtonVariant = "default",
  className,
  active,
  children,
  ...rest
}: ChipButtonProps) => {
  return (
    <button
      className={clsx(
        sizes[size],
        variants[ButtonVariant],
        "transition-all duration-300 ease-in-out rounded-full cursor-pointer",
        active && ButtonVariant === "default" && "!bg-blue-600 text-white !border-blue-600",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
