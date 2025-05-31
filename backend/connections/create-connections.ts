import { SemesterType, ClassType } from "../types/request-types";

export async function createSemester({
  semesterName,
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
        body: JSON.stringify({ semesterName, startDate, endDate }),
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
    return (await response.json()) as ClassType[];
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
