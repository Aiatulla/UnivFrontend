import {
  SemesterType,
  ClassType,
  StudentType,
  FetchClassType,
  TeacherType,
  SubjectType,
} from "../types/request-types";

export async function createSemester({
  name,
  startDate,
  endDate,
}: SemesterType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/semester`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ semesterName: name, startDate, endDate }),
      }
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return await response.text();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function fetchSemesters() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/semester`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return (await response.json()) as SemesterType[];
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function fetchClasses() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/classes`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return (await response.json()) as FetchClassType[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export async function createClass({
  classCode,
  className,
  semesterId,
}: ClassType & { semesterId: number }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/classes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classCode,
          className,
          semesterId: {
            semesterId, // nested here
          },
        }),
      }
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return await response.text();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function fetchStudents() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/students`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return (await response.json()) as StudentType[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export async function createStudent({
  studentCode,
  fullName,
  password,
  classId,
}: StudentType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/students`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentCode,
          fullName,
          password,
          classes: { classId },
        }),
      }
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return await response.text();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function createTeacher({
  teacherCode,
  fullName,
  password,
}: TeacherType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/teachers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherCode,
          fullName,
          password,
        }),
      }
    );
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function fetchTeachers() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/teachers`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return (await response.json()) as TeacherType[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export async function fetchSubjects() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/subjects`
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }
    return (await response.json()) as TeacherType[];
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export async function createSubject({ subjectCode, name }: SubjectType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/subjects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subjectCode, subjectName: name }),
      }
    );
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}

export async function assignSubjectToClass({
  classId,
  subjectId,
  credits,
}: {
  classId: number;
  subjectId: number;
  credits: number;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/univ/class-subjects/assign`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ classId, subjectId, credits }),
      }
    );

    if (!response.ok) {
      const result = await response.text();
      throw new Error(result);
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
