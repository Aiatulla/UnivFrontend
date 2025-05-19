import clsx from "clsx";
import React from "react";

export type ParagraphType = "sm" | "md" | "lg";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  type?: ParagraphType;
  id?: string;
  important?: boolean;
}

const Paragraph = ({
  children,
  className,
  type,
  id,
  important,
}: ParagraphProps) => {
  const getTailwindClasses = () => {
    switch (type) {
      case "lg":
        return clsx("text-[24px] leading-[130%] tracking-[-0.03em]");
      case "md":
        return clsx("text-[20px] leading-[140%] tracking-[-0.01em]");
      case "sm":
        return clsx("text-[15px] leading-[140%] tracking-[-0.01em]");
      default:
        return clsx("text-[16px] leading-[130%] tracking-[-0.02em]");
    }
  };
  return (
    <span
      id={id}
      className={clsx(
        getTailwindClasses(),
        "text-neutral-950",
        className,
        important && "font-[500]"
      )}
    >
      {children}
    </span>
  );
};

export default Paragraph;
