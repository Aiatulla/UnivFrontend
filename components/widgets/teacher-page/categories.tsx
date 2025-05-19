import { CustomTable } from "@/components/tables/CustomTable"
import { NumberInput, Input, Button } from "@heroui/react"
import { QuizzesCategoryAccordion } from "@/components/elements/Accordion"
import { div } from "framer-motion/client"
import Paragraph from "@/components/elements/Paragraph"
import { HiPlus } from "react-icons/hi2"


const headers = ["Student ID", "Name", "Grade", "Comments"]

const data = [
    [
        "S1001",
        "Alice Johnson",
        <NumberInput
        classNames={{
            inputWrapper: "h-10"
          }}
        defaultValue={70}
            placeholder="Enter the grade"
            radius="sm"
            variant="bordered"
        />,
        <Input variant="bordered" radius="sm" placeholder="Add comment..."/>

    ],
    [
        "S1001",
        "Alice Johnson",
        <NumberInput
        classNames={{
            inputWrapper: "h-10"
          }}
        defaultValue={70}
            placeholder="Enter the grade"
            radius="sm"
            variant="bordered"
        />,
        <Input variant="bordered" radius="sm" placeholder="Add comment..."/>

    ]
]

export const Categories = () => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <Paragraph  type="md" className="font-[500] ">Assessment Categories</Paragraph>
                <Button className="!w-[150px] rounded-[8px] bg-[#0d6efd] hover:bg-[#0b5ed7] text-white"><HiPlus size={20} stroke-width={1} className="" />Add Category</Button>
            
            </div>
            <div className="pt-4">
                <QuizzesCategoryAccordion />
            </div>
        {/* <CustomTable headers={headers} data={data} columnWidths={["w-1/5", "w-1/5", "w-1/5", "w-2/5"]} /> */}
        </div>
    )
}