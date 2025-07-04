"use client";

import { SubjectCard } from "@/components/cards/SubjectCard";
import Paragraph from "@/components/elements/Paragraph";
import { Categories } from "@/components/widgets/teacher-page/categories";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@heroui/react";
import { CustomButton } from "@/components/elements/CustomButton";
import { HiPlus } from "react-icons/hi2";
import { div } from "framer-motion/client";
import { QuizzesCategoryAccordion } from "@/components/elements/Accordion";
import { StudentWidget } from "@/components/widgets/teacher-page/student";
import { GradeDistribution } from "@/components/widgets/teacher-page/grade-distribution";
import { FaFileExport } from "react-icons/fa";
import { useRouter } from "next/navigation";

const tabs: string[] = [
  "Students",
  "Categories & Grades",
  "Grade Distribution",
  "Analytics",
];

const tabContent = {
  Students: <StudentWidget />,
  "Categories & Grades": (
    <div>
      <Categories />
    </div>
  ),
  "Grade Distribution": <GradeDistribution />,
  Analytics: <div>Analytics Content</div>,
};

const TeachersPage = () => {
  const [activeTab, setActiveTab] = useState("Students");
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic here
    router.push("/univ/login");
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-3/12 lg:w-2/12 fixed h-full bg-[#2c3e50] z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center pt-10 pb-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-bold mb-4 border-2 border-white/30">
            JS
          </div>
          <Paragraph type="md" className="text-white font-medium">
            Dr. John Smith
          </Paragraph>
          <Paragraph className="text-blue-100/70 text-sm mt-1">
            Computer Science Department
          </Paragraph>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <Button
            className="w-full bg-[#3498db] text-white py-3 rounded-[8px] flex justify-center items-center"
            onClick={handleLogout}
          >
            <span className="mr-2">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:ml-[25%] lg:ml-[16.666667%] p-4 overflow-y-auto">
        <div className="flex flex-col">
          <Paragraph className="pt-2 font-[500]" type="lg">
            Teacher Dashboard
          </Paragraph>
          <Paragraph type="sm" className="pt-2 text-neutral-400">
            Welcome back, Dr. Smith. Here's an overview of your subjects.
          </Paragraph>
          <Paragraph className="pt-6 font-[500] !text-[24px]">
            My Subjects
          </Paragraph>
          <div className="flex overflow-x-auto whitespace-nowrap gap-4 scroll-thin py-2">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
          </div>
          <div className="flex flex-col pt-10">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <Paragraph type="lg" className="pt-2 font-[500]">
                  CS101 - Introduction to Programming
                </Paragraph>
                <Paragraph type="sm" className="pt-2 text-neutral-400">
                  Spring 2023 | Mon/Wed/Fri 10:00-11:30 | Room 205
                </Paragraph>
              </div>
              <Button
                type="button"
                className="!bg-white !text-blue-600  px-4 mt-2 rounded !w-[100px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
              >
                <FaFileExport size={20} strokeWidth={1} className="" />
                Export
              </Button>
            </div>
            <div className="border-b-[2px] border-neutral-200 mt-6">
              <nav className="flex">
                {tabs.map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={clsx(
                      "px-3 py-2 text-sm bg-white font-medium rounded focus:outline-none",
                      activeTab === tab
                        ? "bg-white  text-blue-600 rounded-[8px] border-[2px] rounded-b-none border-b-white border-t-neutral-200 border-x-neutral-200"
                        : "text-gray-700 hover:text-blue-600"
                    )}
                  >
                    {tab}
                  </Button>
                ))}
              </nav>
            </div>

            {/* Div to show the content of the active tab */}
            <div className="bg-white min-h-100 border border-gray-200 shadow-md rounded-[8px] mt-6 mb-6">
              <div className="p-4 flex flex-col">
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;
