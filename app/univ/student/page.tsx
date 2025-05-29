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
import { GpaCards } from "@/components/cards/gpa-cards";
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { InfoCards } from "@/components/cards/info-cards";
import { StudentSubjectCard } from "@/components/cards/student-subject-card";
import { FaChartBar } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const StudentPage = () => {
  const [activeTab, setActiveTab] = useState("Students");
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
          <Button className="w-full bg-[#3498db] text-white py-3 rounded-[8px] flex justify-center items-center">
            <span className="mr-2">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:ml-[25%] lg:ml-[16.666667%] p-4 overflow-y-auto">
        <div className="flex flex-col gap-5 shadow-md">
          <Paragraph className=" font-[600]" type="lg">
            Student Dashboard
          </Paragraph>
          <div className="flex flex-col py-4 border rounded-[8px] bg-white ">
            <Paragraph type="lg" className="px-4 py-2 font-semibold flex">
              {" "}
              <FaStar className="mr-1 mt-[2px]" />
              Academic Summary
            </Paragraph>
            <div className="flex flex-row justify-between items-center px-4 py-2 gap-2">
              <GpaCards topLabel="Overall GPA" bottomLabel="GPA" gpa={3.5} />
              <GpaCards topLabel="Overall GPA" bottomLabel="GPA" gpa={3.5} />
              <GpaCards topLabel="Overall GPA" bottomLabel="GPA" gpa={3.5} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 pt-5 shadow-md">
          <div className="flex flex-col py-4 border rounded-[8px] bg-white ">
            <Paragraph type="lg" className="px-4 py-2 font-semibold flex">
              {" "}
              <FaBookOpen className="mr-1 mt-[2px]" />
              My Subjects
            </Paragraph>
            <div className="grid grid-cols-3 gap-5 px-4 py-2">
              <StudentSubjectCard />
              <StudentSubjectCard />
              <StudentSubjectCard />
              <StudentSubjectCard />
              <StudentSubjectCard />
              <StudentSubjectCard />
            </div>
          </div>

          <div className="flex flex-col py-4 border rounded-[8px] bg-white ">
            <div className="flex justify-between ">
              <Paragraph type="lg" className="px-4 py-2 font-semibold flex">
                {" "}
                <FaChartBar className="mr-1 mt-[2px]" />
                Data Structures - Grade Breakdown
              </Paragraph>
              <Button className="bg-white border-[2px] rounded-[8px] me-3 hover:bg-gray-500 hover:text-white">
                <FaTimes />
                Close
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-5 px-4 py-2">
              <StudentSubjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
