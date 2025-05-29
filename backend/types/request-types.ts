export interface LoginRequest {
  role: "Student" | "Teacher" | "Admin";
  userCode: string;
  password: string;
}

export interface SemesterType {
  semesterName: string;
  startDate: string;
  endDate: string;
}
