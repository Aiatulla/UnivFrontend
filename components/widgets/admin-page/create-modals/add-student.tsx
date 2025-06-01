import {
  createStudent,
  fetchClasses,
} from "@/backend/connections/create-connections";
import { ClassType, FetchClassType } from "@/backend/types/request-types";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomModal } from "@/components/modals/custom-modal";
import { useEffect, useState } from "react";

type AddStudentModalProps = {
  className?: string;
  classIdProp?: number; // optional classId from parent
};

export const AddStudentModal = ({
  className,
  classIdProp,
}: AddStudentModalProps) => {
  const [studentCode, setStudentCode] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [classId, setClassId] = useState<number>(classIdProp ?? 0);
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState<FetchClassType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadClasses() {
      setLoading(true);
      try {
        const data = await fetchClasses();
        const normalized = data.map((item: any) => ({
          id: item.classId,
          classCode: item.classCode,
          name: item.className,
          semesterId: {
            id: item.semesterId.semesterId,
            name: item.semesterId.semesterName,
            startDate: item.semesterId.startDate,
            endDate: item.semesterId.endDate,
            status: item.semesterId.status,
          },
        }));

        setClasses(normalized);

        // Set classId only if provided as prop
        if (classIdProp) {
          const matched = normalized.find((c) => c.id === classIdProp);
          if (matched) setClassId(matched.id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        heroToast({
          description: "Failed to load classes",
          color: "danger",
        });
      } finally {
        setLoading(false);
      }
    }
    loadClasses();
  }, [classIdProp]);

  const handleCreateStudent = async (onClose: () => void) => {
    if (!studentCode || !fullName || !classId || !password) {
      heroToast({
        description: "Please fill in all fields.",
        color: "danger",
      });
      return;
    }
    setLoading(true);
    try {
      await createStudent({
        studentCode,
        fullName,
        classId,
        password,
      });
      heroToast({
        description: "Student created successfully.",
        color: "success",
      });
      onClose();
    } catch (err) {
      heroToast({
        description:
          err instanceof Error ? err.message : "Something went wrong",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal
      buttomClassName={className}
      header="Add New Student"
      buttonLabel="Create Student"
      button="Add Student"
      onClick={handleCreateStudent}
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Student Code"
            placeholder="e.g., S123456"
            inputClassName="h-[38px]"
            onChange={(e) => setStudentCode(e.target.value)}
          />
          <CustomInput
            type="text"
            label="Full Name"
            placeholder="e.g., John Doe"
            inputClassName="h-[38px]"
            onChange={(e) => setFullName(e.target.value)}
          />

          <CustomDropdown
            className="h-[38px]"
            mainLabel="Class"
            data={classes}
            onSelect={(selectedItem) => setClassId(selectedItem.id)}
            selectedId={classId}
            disabled={!!classIdProp} // disable dropdown if classId was passed
          />

          <CustomInput
            type="text"
            label="Password"
            inputClassName="h-[38px]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      }
    />
  );
};
