import Paragraph from "@/components/elements/Paragraph";
import { CustomTable } from "@/components/tables/CustomTable";
import { Button, Input, Pagination } from "@heroui/react";
import { HiPlus } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { ManageModal } from "../create-modals/manage-modal";

export interface CustomDashboardProps {
  headers: string[];
  data: (string | React.ReactNode)[][];
  topRightContent?: React.ReactNode;
  topLeftContent?: React.ReactNode;
  // isMain?: boolean;
}

const headers1 = [
  "Class ID",
  "Class Name",
  "Current Semester",
  "Students",
  "Subjects",
  "Teachers",
  "Actions",
];
const data1 = [
  [
    "CS24",
    "	Computer Science 2024",
    "Spring 2024",
    "45",
    "6",
    "4",
    <ManageModal key="manage-modal" />,
  ],
];

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
          <CustomTable headers={headers1} data={data1} />
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
