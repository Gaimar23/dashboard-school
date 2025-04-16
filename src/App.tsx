import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Student from "./pages/student/Student";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Parents from "./pages/parents/Parents";
import Subjects from "./pages/subjects/Subjects";
import Classes from "./pages/classes/Classes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/list/teachers" element={<Teachers />} />
        <Route path="/list/students" element={<Students />} />
        <Route path="/list/parents" element={<Parents />} />
        <Route path="/list/subjects" element={<Subjects />} />
        <Route path="/list/classes" element={<Classes />} />
      </Routes>
    </>
  );
}

export default App;
