export interface LoginRequest {
  role: "Student" | "Teacher" | "Admin";
  userCode: string;
  password: string;
}
