import {
  assignSubjectToClass,
  fetchSubjects,
} from "@/backend/connections/create-connections";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomModal } from "@/components/modals/custom-modal";
import { useEffect, useState } from "react";

type AssignSubjectModalProps = {
  classId: number;
  className?: string;
};

export const AssignSubjectModal = ({
  classId,
  className,
}: AssignSubjectModalProps) => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [credits, setCredits] = useState<number>(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const fetched = await fetchSubjects();
        setSubjects(
          fetched.map((item: any) => ({
            id: item.subjectId,
            name: item.subjectName,
          }))
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        // heroToast({
        //   description: "Failed to load subjects",
        //   color: "danger",
        // });
      }
    };
    loadSubjects();
  }, []);

  const handleAssign = async (onClose: () => void) => {
    if (!selectedSubject || !credits || !classId) {
      heroToast({
        description: "Please fill all fields",
        color: "danger",
      });
      return;
    }

    setLoading(true);
    try {
      await assignSubjectToClass({
        classId,
        subjectId: selectedSubject.id,
        credits,
      });
      heroToast({
        description: "Subject assigned successfully",
        color: "success",
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      heroToast({ description: error, color: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal
      buttomClassName={className}
      onClick={handleAssign}
      header="Assign Subject to Class"
      buttonLabel="Assign Subject"
      button="Assign Subject"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomDropdown
            className="h-[38px]"
            mainLabel="Select Subject"
            data={subjects}
            onSelect={setSelectedSubject}
            defaultSelected={selectedSubject}
          />
          <CustomInput
            type="number"
            label="Credits"
            value={credits}
            inputClassName="h-[38px]"
            onChange={(e) => setCredits(Number(e.target.value))}
          />
        </div>
      }
    />
  );
};
