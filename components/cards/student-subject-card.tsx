import { div } from "framer-motion/client";
import { CustomCard } from "./custom-card";
import Paragraph from "../elements/Paragraph";

export const StudentSubjectCard = () => {
  return (
    <CustomCard
      isHover
      className="w-full bg-white shadow-md "
      headerClassName="bg-blue-500 text-white"
      cardHeader={
        <div className="text-lg font-semibold flex flex-col gap-5 text-white">
          <Paragraph className="text-white pt-4">Data Structures</Paragraph>
          <Paragraph type="sm" className="font-[400] text-white pb-4">
            CS201 | Prof. Smith
          </Paragraph>
        </div>
      }
      cardBody={
        <div className="text-lg font-semibold flex flex-col gap-5">
          <Paragraph className="pt-2 text-[30px]">+A</Paragraph>
          <Paragraph className="pt-1">Data Structures</Paragraph>
          <Paragraph type="sm" className="font-[400]  pb-4">
            CS201 | Prof. Smith
          </Paragraph>
        </div>
      }
    />
  );
};
