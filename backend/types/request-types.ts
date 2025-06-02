export interface LoginRequest {
  role: "Student" | "Teacher" | "Admin";
  userCode: string;
  password: string;
}

export interface ClassType {
  id?: number;
  classCode: string;
  className: string;
  semesterId: number;
}

export interface FetchClassType {
  id?: number;
  classCode: string;
  name: string;
  semesterId: SemesterType;
}

export interface StudentType {
  studentId?: number;
  studentCode: string;
  fullName: string;
  password: string;
  classId: number;
  gpa?: number;
}

export interface TeacherType {
  teacherId?: number;
  teacherCode: string;
  fullName: string;
  password: string;
}

export interface SubjectType {
  id?: number;
  subjectCode: string;
  name: string;
}

export interface StudentData {
  studentId?: number;
  studentCode?: string;
  fullName?: string;
  password?: string;
  classes?: {
    classId: number;
    classCode: string;
    className: string;
    semesterId: SemesterType;
  };
  gpa?: number | null;
}

export interface SemesterType {
  id?: number;
  name: string;
  startDate: string;
  endDate: string;
  status?: string;
}

export interface TeacherAssignmentSummary {
  teacherCode: string;
  fullName: string;
  classCodes: string[]; // e.g., ["CS24", "CS23"]
  subjectCodes: string[]; // e.g., ["CS101", "CS301"]
}
