import { createSubject } from "@/backend/connections/create-connections";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomModal } from "@/components/modals/custom-modal";
import { useState } from "react";

type AddSubjectModalProps = {
  className?: string;
};
export const AddSubjectModal = ({ className }: AddSubjectModalProps) => {
  const [loading, setLoading] = useState(false);
  const [subjectCode, setSubjectCode] = useState<string>("");
  const [subjectName, setSubjectName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCreateSubject = async (onClose: () => void) => {
    if (!subjectCode || !subjectName) {
      heroToast({
        description: "Please fill in all fields.",
        color: "danger",
      });
      return;
    }
    setLoading(true);
    try {
      const data = await createSubject({
        subjectCode,
        name: subjectName,
      });
      heroToast({
        description: "Subject created successfully.",
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
      buttomClassName={className}
      onClick={handleCreateSubject}
      header="Add New Subject"
      buttonLabel="Add Subject"
      button="Crete Subject"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Subject Code"
            placeholder="e.g., CS101"
            inputClassName="h-[38px]"
            onChange={(e) => setSubjectCode(e.target.value)}
          />
          <CustomInput
            type="text"
            label="Subject Name"
            placeholder="e.g., Introduction to Computer Science"
            inputClassName="h-[38px]"
            onChange={(e) => setSubjectName(e.target.value)}
          />
          {/* <CustomDropdown className="h-[38px]" mainLabel="Department" /> */}
        </div>
      }
    />
  );
};
