"use cient";

import Paragraph from "@/components/elements/Paragraph";
import { CustomTable } from "@/components/tables/CustomTable";
import { Button, Slider } from "@heroui/react";
import clsx from "clsx";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi2";

export const GradeDistribution = () => {
  const [value, setValue] = useState(30);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="w-[50%]">
          <Paragraph type="md" className="font-[500] ">
            Assessment Categories
          </Paragraph>
        </div>
        <div className="w-[50%] flex flex-col">
          <Paragraph type="md" className="font-[500] ">
            Adjust Weights
          </Paragraph>
          <Paragraph type="sm" className="pt-2 text-neutral-400">
            Set the percentage each category contributes to the final grade.
          </Paragraph>
          <div className="pt-4">
            <Paragraph className="mb-2 text-netural-400">
              Quizzes: {value}%
            </Paragraph>
            <Slider
              defaultValue={value}
              step={5}
              minValue={0}
              maxValue={100}
              onChange={(value: number | number[]) =>
                setValue(Array.isArray(value) ? value[0] : value)
              }
            />

            <div
              className={clsx(
                "flex flex-row h-[50px] w-full bg-[#cff4fc] items-center text-[#055160] rounded-[8px] mt-4"
              )}
            >
              <FaCircleInfo className="ml-6 mb-[1px]" />
              <Paragraph type="sm" className="font-[400] ml-2 ">
                Total: {<span className="font-bold">100</span>}%
              </Paragraph>
            </div>
            <Button className="!w-[150px] mt-4 rounded-[8px] bg-[#0d6efd] hover:bg-[#0b5ed7] text-white">
              Save Distribution
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Paragraph type="md" className="font-[500] ">
          Student GPA Overview
        </Paragraph>

        {/* <CustomTable/> */}
      </div>
    </div>
  );
};
