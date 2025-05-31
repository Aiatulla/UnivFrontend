export interface LoginRequest {
  role: "Student" | "Teacher" | "Admin";
  userCode: string;
  password: string;
}

export interface SemesterType {
  id?: number;
  semesterName: string;
  startDate: string;
  endDate: string;
  status?: string;
}

export interface ClassType {
  id?: number;
  classCode: string;
  className: string;
  semesterId: number;
}
