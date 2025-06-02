import { StudentData, TeacherAssignmentSummary } from "../types/request-types";

export async function fetchStudentsByClassId(classId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/students/by-class/${classId}`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }

    return (await response.json()) as StudentData[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export async function fetchTeacherAssignmentSummaries() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/teacher-assignments/assignment-summary`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }

    return (await response.json()) as TeacherAssignmentSummary[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}
