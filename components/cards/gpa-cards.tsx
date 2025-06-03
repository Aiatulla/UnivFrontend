"use client";

import Paragraph from "../elements/Paragraph";
import { CustomCard } from "./custom-card";

type GpaCardProps = {
  topLabel: string;
  bottomLabel: string;
  gpa: number;
};

export const GpaCards = ({ topLabel, bottomLabel, gpa }: GpaCardProps) => {
  return (
    <CustomCard
      className="border py-1 bg-[#4361ee] text-white w-[400px] h-[160px]"
      cardHeader={<Paragraph className="text-white">{topLabel}</Paragraph>}
      cardBody={
        <Paragraph className="text-white text-[40px] font-[500] p-0">
          {gpa}
        </Paragraph>
      }
      cardFooter={<Paragraph className="text-white">{bottomLabel}</Paragraph>}
      bodyClassName="justify-center items-center p-0"
      headerClassName="justify-center items-center"
      footerClassName="justify-center items-center"
    />
  );
};
