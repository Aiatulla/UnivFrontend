"use client";


import { CardExample } from "@/components/cards/Card";
import { SubjectCard } from "@/components/cards/SubjectCard";
import { Button } from "@heroui/react";
import { CustomTable } from "@/components/tables/CustomTable";
import { StudentWidget } from "@/components/widgets/teacher-page/student";
import Paragraph from "@/components/elements/Paragraph";

const TeachersPage = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col md:block w-full md:w-3/12 lg:w-2/12 relative md:fixed md:h-full">
                <div>
                    <Paragraph>Teachers</Paragraph>
                </div>
            </div>

            <div>
                <StudentWidget/>
            </div>
            
        </div>
    )
}

export default TeachersPage;