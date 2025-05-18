import { CustomTable } from "@/components/tables/CustomTable"
import { NumberInput, Input } from "@heroui/react"
import { QuizzesCategoryAccordion } from "@/components/elements/Accordion"
import { div } from "framer-motion/client"


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
        <div className="pt-3">
        <QuizzesCategoryAccordion/>
        {/* <CustomTable headers={headers} data={data} columnWidths={["w-1/5", "w-1/5", "w-1/5", "w-2/5"]} /> */}
        </div>
    )
}