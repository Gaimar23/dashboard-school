import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Student from "./pages/student/Student";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Parents from "./pages/parents/Parents";
import Subjects from "./pages/subjects/Subjects";
import Classes from "./pages/classes/Classes";
import SingleTeacher from "./pages/singleTeacher/SingleTeacher";
import Exams from "./pages/exams/Exams";
import Assignments from "./pages/assignments/Assignments";
import Results from "./pages/results/Results";
import Attendance from "./pages/attendance/Attendance";
import AnnouncementsList from "./pages/announcementsList/AnnouncementsList";
import SingleStudent from "./pages/singleStudent/SingleStudent";
import SingleParent from "./pages/singleParent/SingleParent";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/student" element={<Student />} />
        <Route path="/list/teachers" element={<Teachers />} />
        <Route path="/list/teachers/:teacherId" element={<SingleTeacher />} />
        <Route path="/list/students" element={<Students />} />
        <Route path="/list/students/:studentId" element={<SingleStudent />} />
        <Route path="/list/parents" element={<Parents />} />
        <Route path="/list/parents/:parentId" element={<SingleParent />} />
        <Route path="/list/subjects" element={<Subjects />} />
        <Route path="/list/classes" element={<Classes />} />
        <Route path="/list/exams" element={<Exams />} />
        <Route path="/list/assignments" element={<Assignments />} />
        <Route path="/list/results" element={<Results />} />
        <Route path="/list/attendance" element={<Attendance />} />
        <Route path="/list/announcements" element={<AnnouncementsList />} />
      </Routes>
    </>
  );
}

export default App;
