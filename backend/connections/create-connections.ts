import { SemesterType } from "../types/request-types";

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
      `${process.env.NEXT_PUBLIC_API_URL}/univ/semesters`
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
