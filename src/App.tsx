import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChooseRole } from "./pages/chooseRole/chooseRole";
import TeacherSignIn from "./pages/teacher/TeacherSignIn";
import StudentSignIn from "./pages/student/StudentSingIn";
import ParentSignIn from "./pages/parent/parentSignIn";
import Layout from "./componets/layout";
import { Dashboard } from "./pages/dashboard";
import { Classes } from "./pages/classes";
import { StudentsList } from "./pages/student/studentsList";
import { TeacherList } from "./pages/teacher/TeacherList";
import { TeacherViewStudent } from "./pages/student/teacherAdStudentV";

// const UserRoleContext = createContext();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseRole />}>
          <Route path="teacherSignIn" element={<TeacherSignIn />} />
          <Route path="studentSignIn" element={<StudentSignIn />} />
          <Route path="parentSignIn" element={<ParentSignIn />} />
        </Route>

        <Route path="/layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="students" element={<StudentsList />} />
          <Route path="teachers" element={<TeacherList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
