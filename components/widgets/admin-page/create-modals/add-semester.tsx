import { CustomModal } from "@/components/modals/custom-modal";
import { CustomInput } from "@/components/elements/CustomInput";
import { CustomDatePicker } from "@/components/elements/custom-datepicker";
import { useEffect, useState } from "react";
import { DateValue } from "@heroui/react";
import { createSemester } from "@/backend/connections/create-connections";
import { heroToast } from "@/components/elements/CustomToast";

export const CreateSemesterModal = () => {
  const [semesterName, setSemesterName] = useState("");
  const [startDate, setStartDate] = useState<DateValue | null>(null);
  const [endDate, setEndDate] = useState<DateValue | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreateSemester = async (onClose: () => void) => {
    if (!semesterName || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    } else if (startDate > endDate) {
      alert("Start date cannot be after end date.");
      return;
    }
    setLoading(true);
    try {
      const startDateFormatted = `${startDate.year}-${String(
        startDate.month
      ).padStart(2, "0")}-${String(startDate.day).padStart(2, "0")}`;
      const endDateFormatted = `${endDate.year}-${String(
        endDate.month
      ).padStart(2, "0")}-${String(endDate.day).padStart(2, "0")}`;
      //   console.log("Creating semester with data:", startDate, endDate);
      await createSemester({
        name: semesterName,
        startDate: startDateFormatted,
        endDate: endDateFormatted,
      });

      heroToast({
        description: "Semester created successfully.",
        color: "success",
      });
      onClose();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal
      onClick={handleCreateSemester}
      header="Create New Semester"
      buttonLabel="Create Semester"
      button="Add Semester"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            onChange={(e) => setSemesterName(e.target.value)}
            type="text"
            label="Semester Name"
            placeholder="e.g., Spring 2025"
            inputClassName="h-[38px]"
          />
          <CustomDatePicker
            label="Start Date"
            onChange={(date) => setStartDate(date)}
          />
          <CustomDatePicker
            label="End Date"
            onChange={(date) => setEndDate(date)}
          />
        </div>
      }
    />
  );
};
