import { Button } from "@heroui/react";
import Paragraph from "../elements/Paragraph";
import { CustomCard } from "./custom-card";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

type InfoCardProps = {
  info?: string;
  count?: string;
  className?: string;
  onClick?: () => void;
};

export const InfoCards = ({
  info,
  count,
  className,
  onClick,
}: InfoCardProps) => {
  return (
    <CustomCard
      className={clsx(`!min-w-[200px] bg-blue-500`, className)}
      isHover
      cardBody={
        <div className="flex flex-col gap-1 ">
          <Paragraph type="lg" className=" pl-4 text-white">
            {info}
          </Paragraph>
          <Paragraph className="pl-4 font-[500] text-[38px] text-white">
            {count}
          </Paragraph>
          <Button
            className={clsx(
              `bg-none w-[115px] text-white bg-blue-500 text-[16px] !h-6 underline pl-5 hover:none1`,
              className
            )}
            onClick={onClick}
          >
            View all
            <FaArrowRight size={16} color="white" />
          </Button>
        </div>
      }
    />
  );
};
