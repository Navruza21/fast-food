export interface TypeStudentData {
  id: string;
  firstName: string;
  lastName: string;
  class: string;
  gender: string;
  studentId: string;
  address: string;
  dataBirth: string;
  phoneNum: string;
  fFirstN: string;
  flastN: string;
  fPhoneNum: string;
  mFirstN: string;
  mlastN: string;
  mPhoneNum: string;
  progress: {
    math: { test: string; score: number }[];
    english: { test: string; score: number }[];
    history: { test: string; score: number }[];
    physics: { test: string; score: number }[];
  };
}

export interface TypeTeacherData {
  id: string;
  firstName: string;
  lastName: string;
  subject: string;
  gender: string;
  teacherId: string;
  address: string;
  dataBirth: string;
  phoneNum: string;
  email: string;
  qualification: string;
  experience: number; // years of experience
}
