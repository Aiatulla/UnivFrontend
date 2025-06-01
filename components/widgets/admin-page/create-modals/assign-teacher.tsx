import {
  assignTeacher,
  fetchSubjects,
  fetchTeachers,
} from "@/backend/connections/create-connections";
import { TeacherType } from "@/backend/types/request-types";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { heroToast } from "@/components/elements/CustomToast";
import { CustomModal } from "@/components/modals/custom-modal";
import { useEffect, useState } from "react";

type AssignTeacherModalProps = {
  classId: number;
  semesterId: number;
  className?: string;
};

export const AssignTeacherModal = ({
  classId,
  semesterId,
  className,
}: AssignTeacherModalProps) => {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedTeachers, fetchedSubjects] = await Promise.all([
          fetchTeachers(),
          fetchSubjects(),
        ]);

        setTeachers(
          fetchedTeachers.map((t: TeacherType) => ({
            id: t.teacherId,
            name: t.fullName,
          }))
        );

        setSubjects(
          fetchedSubjects.map((s: any) => ({
            id: s.subjectId,
            name: s.subjectName,
          }))
        );
      } catch (err) {
        const errMsg =
          err instanceof Error ? err.message : "Something went wrong";
        setError(errMsg);
        heroToast({ description: errMsg, color: "danger" });
      }
    };
    loadData();
  }, []);

  const handleAssign = async (onClose: () => void) => {
    if (!selectedTeacher || !selectedSubject) {
      heroToast({
        description: "Please select both teacher and subject.",
        color: "danger",
      });
      return;
    }

    setLoading(true);
    try {
      console.log(
        "1:",
        classId,
        "2:}",
        semesterId,
        "3:}",
        selectedTeacher.id,
        "4:}",
        selectedSubject.id
      );
      await assignTeacher({
        classId,
        semesterId,
        teacherId: selectedTeacher.id,
        subjectId: selectedSubject.id,
      });
      heroToast({
        description: "Teacher assigned successfully",
        color: "success",
      });
      onClose();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      heroToast({ description: msg, color: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal
      buttomClassName={className}
      onClick={handleAssign}
      header="Assign Teacher to Subject"
      buttonLabel="Assign"
      button="Assign"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomDropdown
            className="h-[38px]"
            mainLabel="Select Teacher"
            data={teachers}
            onSelect={setSelectedTeacher}
            defaultSelected={selectedTeacher}
          />
          <CustomDropdown
            className="h-[38px]"
            mainLabel="Select Subject"
            data={subjects}
            onSelect={setSelectedSubject}
            defaultSelected={selectedSubject}
          />
        </div>
      }
    />
  );
};
