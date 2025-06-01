import { createTeacher } from "@/backend/connections/create-connections";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomModal } from "@/components/modals/custom-modal";
import { useState } from "react";

export const AddTeacherModal = () => {
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [teacherCode, setTeacherCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleCreateTeacher = async (onClose: () => void) => {
    if (!fullName || !password || !teacherCode) {
      heroToast({
        description: "Please fill in all fields.",
        color: "danger",
      });
      return;
    }
    setLoading(true);
    try {
      const data = await createTeacher({
        teacherCode,
        fullName,
        password,
      });
      heroToast({
        description: "Teacher created successfully.",
        color: "success",
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <CustomModal
      header="Add New Teacher"
      buttonLabel="Create Teacher"
      button="Add Teacher"
      onClick={handleCreateTeacher}
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Teacher Code"
            placeholder="e.g., T123456"
            inputClassName="h-[38px]"
            onChange={(e) => setTeacherCode(e.target.value)}
          />
          <CustomInput
            type="text"
            label="Full Name"
            placeholder="e.g., John Doe"
            inputClassName="h-[38px]"
            onChange={(e) => setFullName(e.target.value)}
          />
          {/* <CustomDropdown className="h-[38px]" mainLabel="Department" /> */}
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
