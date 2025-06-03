import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { CreateSemesterModal } from "./add-semester";
import { CustomTable } from "@/components/tables/CustomTable";
import { AddStudentModal } from "./add-student";
import { AddSubjectModal } from "./add-subject";
import { AddTeacherModal } from "./add-teacher";
import { SemesterType, StudentData } from "@/backend/types/request-types";
import { fetchSemesters } from "@/backend/connections/create-connections";
import { fetchStudentsByClassId } from "@/backend/connections/fetch-datas";
import { AssignSubjectModal } from "./assign-subject";
import { AssignTeacherModal } from "./assign-teacher";

const headers1 = ["Semesters", "Start Date", "End Date", "Status", "Actions"];

const headers2 = ["Student ID", "Full Name", "GPA", "Actions"];

const headers3 = [
  "Subject Code",
  "Subject Name",
  "Credits",
  "Assigned Teacher",
  "Actions",
];
const data3 = [
  [
    "CS101",
    "Introduction to Computer Science",
    "3",
    "John Doe",
    "Edit | Delete",
  ],
  [
    "CS202",
    "Data Structures and Algorithms",
    "4",
    "Jane Smith",
    "Edit | Delete",
  ],
  ["CS303", "Computer Systems", "3", "Bob Johnson", "Edit | Delete"],
];

const headers4 = ["Teacher ID", "Name", "Email", "Subjects", "Actions"];
const data4 = [
  [
    "T1001",
    "Alice Brown",
    "alice.brown@example.com",
    "Math, Science",
    "Edit | Delete",
  ],
  [
    "T1002",
    "David Green",
    "david.green@example.com",
    "History, Geography",
    "Edit | Delete",
  ],
  ["T1003", "Emma White", "emma.white@example.com", "Physics", "Edit | Delete"],
];

export const ManageModal = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const tabs: string[] = ["Semesters", "Students", "Subjects", "Teachers"];

  const [semesters, setSemesters] = useState<SemesterType[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<StudentData[]>([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await fetchStudentsByClassId(1);
        setStudents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadSemesters() {
      try {
        const data = await fetchSemesters();
        const normalized = data.map((item: any) => ({
          id: item.semesterId,
          name: item.semesterName,
          startDate: new Date(item.startDate).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          endDate: new Date(item.endDate).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          status: item.status,
        }));
        setSemesters(normalized);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
    loadSemesters();
  }, []);

  console.log("semesters", semesters);
  const data1 = semesters.map((semester) => [
    semester.name,
    semester.startDate,
    semester.endDate,
    semester.status === null ? "N/A" : semester.status,
    "Edit",
  ]);

  const data2 = students.map((student) => [
    student.studentCode,
    student.fullName,
    student?.gpa || "N/A",
    "Edit",
  ]);

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const tabContent: Record<string, React.ReactNode> = {
    Semesters: (
      <div className="flex flex-col justify-start gap-4">
        <CreateSemesterModal className="!w-[150px] !h-[30px] !text-[12px] !rounded-[4px]" />
        <CustomTable headers={headers1} data={data1} />
      </div>
    ),
    Students: (
      <div className="flex flex-col justify-start gap-4">
        <AddStudentModal
          className="!w-[150px] !h-[30px] !text-[12px] !rounded-[4px]"
          classIdProp={1}
        />
        <CustomTable headers={headers2} data={data2} />
      </div>
    ),
    Subjects: (
      <div className="flex flex-col justify-start gap-4">
        <AssignSubjectModal
          className="!w-[150px] !h-[30px] !text-[12px] !rounded-[4px]"
          classId={1}
        />
        <CustomTable headers={headers3} data={data3} />
      </div>
    ),
    Teachers: (
      <div className="flex flex-col justify-start gap-4">
        <AssignTeacherModal
          className="!w-[150px] !h-[30px] !text-[12px] !rounded-[4px]"
          classId={1}
          semesterId={1}
        />
        <CustomTable headers={headers4} data={data4} />
      </div>
    ),
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="!bg-white !text-blue-600 h-[30px] px-4 py-2 rounded !w-[80px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
      >
        Manage
      </Button>

      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        className="min-w-[700px]"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                Manage {activeTab}
              </ModalHeader>

              <Divider />

              <ModalBody className="mb-3">
                {/* Tabs */}
                <div className="border-b-[2px] border-neutral-200 mt-4 mb-4">
                  <nav className="flex">
                    {tabs.map((tab) => (
                      <Button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={clsx(
                          "px-3 py-2 text-sm font-medium rounded focus:outline-none",
                          activeTab === tab
                            ? "bg-white text-blue-600 rounded-[8px] border-[2px] rounded-b-none border-b-white border-t-neutral-200 border-x-neutral-200"
                            : "bg-white text-gray-700 hover:text-blue-600"
                        )}
                      >
                        {tab}
                      </Button>
                    ))}
                  </nav>
                </div>

                {/* Tab content */}
                <div className="p-2">{tabContent[activeTab]}</div>
              </ModalBody>

              <Divider />

              <ModalFooter>
                <Button
                  className="bg-[#6c757d] text-white hover:bg-[#5c636a] rounded-[8px]"
                  onPress={onClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
