import { CustomButton } from "@/components/elements/CustomButton";
import Paragraph from "@/components/elements/Paragraph";
import { CustomTable } from "@/components/tables/CustomTable";
import { CustomProgress } from "@/components/tables/Progress";
import { Pagination, Button, Input } from "@heroui/react";
import { HiPlus } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const handleView = (rowName: string) => {
  alert(`Viewing ${rowName}`);
};

const headers = ["Student ID", "Name", "Current Grade", "Attendance", "Action"];

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
      <div className="flex flex-row justify-between">
        <div className="flex">
          <Input
            placeholder="Search..."
            classNames={{
              inputWrapper:
                "rounded-[8px] min-h-[36px] border-[1px] border-neutral-300 rounded-r-none hover:bg-white",
            }}
            className=" h-[36px] hover:bg-white"
            radius="none"
          />
          <Button className="!min-w-[20px] bg-white border-[0.5px] h-[36px] border-neutral-500 text-gray-500  rounded-[8px] rounded-l-none hover:bg-gray-500 hover:text-white">
            <IoSearch size={20} />
          </Button>
        </div>
        <Button className="!w-[150px] rounded-[8px] bg-[#0d6efd] hover:bg-[#0b5ed7] text-white">
          <HiPlus size={20} stroke-width={1} className="" />
          Add Student
        </Button>
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
  );
};
