import { Button } from "@heroui/react";
import Paragraph from "../elements/Paragraph";
import { CustomCard } from "./custom-card";
import { FaArrowRight } from "react-icons/fa";

type InfoCardProps = {
  info?: string;
  count?: string;
};

export const InfoCards = ({ info, count }: InfoCardProps) => {
  return (
    <CustomCard
      className="!min-w-[200px] bg-blue-500"
      isHover
      cardBody={
        <div className="flex flex-col gap-1 ">
          <Paragraph type="lg" className=" pl-4 text-white">
            {info}
          </Paragraph>
          <Paragraph className="pl-4 font-[500] text-[38px] text-white">
            {count}
          </Paragraph>
          <Button className="bg-none w-[115px] text-white bg-blue-500 text-[16px] !h-6 underline pl-5 hover:none">
            View all
            <FaArrowRight size={16} color="white" />
          </Button>
        </div>
      }
    />
  );
};
