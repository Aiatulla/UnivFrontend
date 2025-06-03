"use client";

import { useEffect, useState } from "react";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomButton } from "@/components/elements/CustomButton";
import { CustomInput } from "@/components/elements/CustomInput";
import Paragraph from "@/components/elements/Paragraph";
import { CustomModal } from "@/components/modals/custom-modal";
import { CreateClassModal } from "@/components/widgets/admin-page/create-modals/add-class";
import { Button, Divider, Input, Pagination } from "@heroui/react";
import { InfoCards } from "@/components/cards/info-cards";
import { HiPlus } from "react-icons/hi2";
import { CustomTable } from "@/components/tables/CustomTable";
import { IoSearch } from "react-icons/io5";
import { data } from "framer-motion/client";
import { CustomDashboard } from "@/components/widgets/admin-page/mini-pages/custom-dashboard";
import { AddStudentModal } from "@/components/widgets/admin-page/create-modals/add-student";
import { AddTeacherModal } from "@/components/widgets/admin-page/create-modals/add-teacher";
import { AddSubjectModal } from "@/components/widgets/admin-page/create-modals/add-subject";
import { CreateSemesterModal } from "@/components/widgets/admin-page/create-modals/add-semester";
import {
  StudentData,
  TeacherAssignmentSummary,
} from "@/backend/types/request-types";
import { fetchStudents } from "@/backend/connections/create-connections";
import { fetchTeacherAssignmentSummaries } from "@/backend/connections/fetch-datas";
import { ManageModal } from "@/components/widgets/admin-page/create-modals/manage-modal";
import { useRouter } from "next/navigation";

// const router = useRouter();
const AdminPage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [students, setStudents] = useState<StudentData[]>([]);
  const [teachers, setTeachers] = useState<TeacherAssignmentSummary[]>([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (err) {
        // setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadTeachers() {
      try {
        const data = await fetchTeacherAssignmentSummaries();
        setTeachers(data);
      } catch (err) {
        // setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
    loadTeachers();
  }, []);

  const studentHeaders = ["Student ID", "Full Name", "Class", "GPA", "Actions"];
  const studentData = students.map((student) => [
    student.studentCode?.toString() || "",
    student.fullName || "",
    student.classes?.classCode || "",
    student.gpa?.toString() || "0",
    <Button
      type="button"
      className="!bg-white !text-blue-600  px-4  rounded !w-[50px] !h-[30px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
    >
      Edit
    </Button>,
  ]);

  const teacherData = teachers.map((teacher) => [
    teacher.teacherCode?.toString() || "",
    teacher.fullName || "",
    teacher.classCodes || "",
    teacher.subjectCodes || "N/A",
    <Button
      type="button"
      className="!bg-white !text-blue-600  px-4  rounded !w-[50px] !h-[30px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
    >
      Edit
    </Button>,
  ]);
  const teacherHeaders = [
    "Teacher ID",
    "Full Name",
    "Classes",
    "Subjects",
    "Actions",
  ];

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

  const menuItems = [
    "Dashboard",
    "Classes",
    "Students",
    "Teachers",
    "Subjects",
    "Semesters",
  ];

  const dashboardHeaders = [
    "Class ID",
    "Class Name",
    "Current Semester",
    "Students",
    "Subjects",
    "Teachers",
    "Actions",
  ];
  const dashboardData = [
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

  const pages = {
    Dashboard: (
      <CustomDashboard
        headers={dashboardHeaders}
        data={dashboardData}
        topLeftContent="Detailed GPA Report"
        topRightContent={
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
        }
      />
    ),
    Classes: (
      <CustomDashboard
        headers={headers1}
        data={data1}
        topLeftContent="Classes Management"
        topRightContent={<CreateClassModal />}
      />
    ),
    Students: (
      <CustomDashboard
        headers={studentHeaders}
        data={studentData}
        topLeftContent="Students Management"
        topRightContent={<AddStudentModal />}
      />
    ),
    Teachers: (
      <CustomDashboard
        headers={teacherHeaders}
        data={teacherData}
        topLeftContent="Teachers Management"
        topRightContent={<AddTeacherModal />}
      />
    ),
    Subjects: (
      <CustomDashboard
        headers={headers1}
        data={data1}
        topLeftContent="Subjects Management"
        topRightContent={<AddSubjectModal />}
      />
    ),
    Semesters: (
      <CustomDashboard
        headers={headers1}
        data={data1}
        topLeftContent="Semesters Management"
        topRightContent={<CreateSemesterModal />}
      />
    ),
  };

  const handleLogout = () => {
    // router.push("/univ/login");
    heroToast({
      title: "Logout",
      description: "You have successfully logged out.",
      color: "danger",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
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

        {/* Navigation */}
        <div className="px-3 py-6 border-t">
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <>
                <Button
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`relative px-6 py-3 text-left transition-all duration-200 rounded-[8px] ${
                    activeItem === item
                      ? "bg-[#3498db] text-white font-medium"
                      : "bg-[#2c3e50] text-blue-100/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </Button>
                {index < menuItems.length - 1 && <div className="mx-6"></div>}
              </>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <Button
            onClick={handleLogout}
            className="w-full bg-[#3498db] text-white py-3 rounded-[8px] flex justify-center items-center"
          >
            <span className="mr-2">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:ml-[25%] lg:ml-[16.666667%] p-4 overflow-y-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-4 md:mb-0 w-full">
            <div className="flex items-center">
              <Paragraph className="font-bold text-gray-800" type="lg">
                Admin Dashboard
              </Paragraph>
            </div>
            <div className="flex w-full whitespace-nowrap gap-4 scroll-thin py-2">
              <InfoCards info="Classes" count="24" />
              <InfoCards info="Students" count="45" className="bg-green-700" />
              <InfoCards info="Teachers" count="10" className="bg-cyan-500" />
              <InfoCards
                info="Active Semesters"
                count="24"
                className="bg-yellow-500"
              />
            </div>

            {pages[activeItem as keyof typeof pages] || "No content available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
