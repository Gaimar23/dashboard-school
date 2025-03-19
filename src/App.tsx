import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Student from "./pages/student/Student";
import Teachers from "./pages/teachers/Teachers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/list/teachers" element={<Teachers />} />
      </Routes>
    </>
  );
}

export default App;
