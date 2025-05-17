import { CustomButton } from "@/components/elements/CustomButton"
import { CustomTable } from "@/components/tables/CustomTable"
import { Input, Pagination } from "@heroui/react"



export const StudentWidget = () => {
    return (
        <div>
            <CustomTable />
            <div className="flex justify-center">
            <Pagination className="mt-5 rounded-[8px]" isCompact showControls initialPage={1} total={10} />;
            </div>
        </div>
    )
}