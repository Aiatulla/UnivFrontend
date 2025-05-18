import { CustomButton } from "@/components/elements/CustomButton";
import { CustomTable } from "@/components/tables/CustomTable";
import { CustomProgress } from "@/components/tables/Progress";
import { Pagination, Button } from "@heroui/react";

const handleView = (rowName: string) => {
  alert(`Viewing ${rowName}`);
};

const headers = [
  "Student ID",
  "Name",
  "Current Grade",
  "Attendance",
  "Action",
];

const data = [
  [
    "001",
    "Tony Reichert",
    "A (92%)",
    <CustomProgress value={70} />,
    <Button
      type="button"
      onClick={() => handleView("Tony Reichert")}
      className="!bg-white !text-blue-600 h-[30px] px-4 py-2 rounded !w-[50px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
    >
      View
    </Button>,
  ],
];

export const StudentWidget = () => {
  return (
    <div>
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
  );
};
