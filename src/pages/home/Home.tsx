import AttendanceChart from "../../components/attendanceChart/AttendanceChart";
import CountChart from "../../components/countChart/CountChart";
import EventCalendar from "../../components/eventCalendar/EventCalendar";
import FinanceChart from "../../components/financeChart/FinanceChart";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import UserCard from "../../components/userCard/UserCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="admin">
          <div className="left">
            <div className="cards-container">
              <UserCard type="Elèves" />
              <UserCard type="Enseignants" />
              <UserCard type="Parents" />
              <UserCard type="Staff" />
            </div>
            <div className="middle-charts">
              <div className="count">
                <CountChart />
              </div>
              <div className="attendance">
                <AttendanceChart />
              </div>
            </div>
            <div className="bottom-chart">
              <FinanceChart />
            </div>
          </div>
          <div className="right">
            <EventCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
