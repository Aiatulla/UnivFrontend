import Paragraph from "@/components/elements/Paragraph";
import { CustomTable } from "@/components/tables/CustomTable";
import { Button, Input, Pagination } from "@heroui/react";
import { HiPlus } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

export interface CustomDashboardProps {
  headers: string[];
  data: (string | React.ReactNode)[][];
  topRightContent?: React.ReactNode;
  topLeftContent?: React.ReactNode;
  // isMain?: boolean;
}

export const CustomDashboard = ({
  headers,
  data,
  topRightContent,
  topLeftContent,
}: CustomDashboardProps) => {
  return (
    <div className="flex flex-col pt-10">
      {/* {isMain && (
        <Paragraph className="py-6 font-medium" type="lg">
          Detailed GPA Report
        </Paragraph>
      )} */}
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex">
            <Paragraph className="font-medium" type="lg">
              {topLeftContent || "Dashboard"}
            </Paragraph>
          </div>
          {topRightContent}
        </div>
        <div className="pt-4">
          <CustomTable headers={headers} data={data} />
          <div className="flex justify-center">
            <Pagination
              className="mt-5 rounded-[8px]"
              isCompact
              showControls
              initialPage={1}
              total={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
