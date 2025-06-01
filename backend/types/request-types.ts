export interface LoginRequest {
  role: "Student" | "Teacher" | "Admin";
  userCode: string;
  password: string;
}

export interface SemesterType {
  id?: number;
  name: string;
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
  id?: number;
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
