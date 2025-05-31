import { CustomModal } from "@/components/modals/custom-modal";
import { CustomInput } from "@/components/elements/CustomInput";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { useEffect, useState } from "react";
import {
  createClass,
  fetchSemesters,
} from "@/backend/connections/create-connections";
import { SemesterType } from "@/backend/types/request-types";
import { heroToast } from "@/components/elements/CustomToast";

export const CreateClassModal = () => {
  const [semesters, setSemesters] = useState<SemesterType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [classCode, setClassCode] = useState("");
  const [className, setClassName] = useState("");
  const [semesterId, setSemesterId] = useState(0);

  useEffect(() => {
    async function loadSemesters() {
      try {
        const data = await fetchSemesters();
        const normalized = data.map((item: any) => ({
          id: item.semesterId,
          semesterName: item.semesterName,
          startDate: item.startDate,
          endDate: item.endDate,
          status: item.status,
        }));
        console.log(normalized);

        setSemesters(normalized);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    }
    loadSemesters();
  }, []);

  const handleCreateClass = async (onClose: () => void) => {
    console.log(classCode, className, semesterId);
    if (!classCode || !className || !semesterId) {
      heroToast({
        description: "Please fill in all fields.",
        color: "danger",
      });
      return;
    }
    setLoading(true);
    try {
      const data = await createClass({ classCode, className, semesterId });
      heroToast({
        description: "Class created successfully.",
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
      header="Add New Class"
      buttonLabel="Create Class"
      button="Add Class"
      onClick={handleCreateClass}
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Class Code"
            placeholder="e.g., CS24"
            inputClassName="h-[38px]"
            onChange={(e) => setClassCode(e.target.value)}
          />
          <CustomInput
            type="text"
            label="Class Name"
            placeholder="e.g., CS24"
            inputClassName="h-[38px]"
            onChange={(e) => setClassName(e.target.value)}
          />
          {/* <CustomDropdown className="h-[38px]" mainLabel="Department" /> */}
          <CustomDropdown
            className="h-[38px]"
            mainLabel="Starting Semester"
            data={semesters}
            onSelect={(selectedItem) => setSemesterId(selectedItem.id)}
          />
        </div>
      }
    />
  );
};
