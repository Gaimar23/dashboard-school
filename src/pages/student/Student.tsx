import Announcements from "../../components/announcements/Announcements";
import BigCalendar from "../../components/bigCalendar/BigCalendar";
import EventCalendar from "../../components/eventCalendar/EventCalendar";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Student.scss";

const Student = () => {
  return (
    <div className="student-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="student">
          <div className="left">
            <div className="schedule-container">
              <h1>Programme</h1>
              <BigCalendar />
            </div>
          </div>
          <div className="right">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
