import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./SingleStudent.scss";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import { TfiMoreAlt } from "react-icons/tfi";
import { IoFilterOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import Performance from "../../components/performance/Performance";
import Announcements from "../../components/announcements/Announcements";
import photo from "../../assets/images/john.jpg";

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "table-data",
  },
];

const SingleStudent = () => {
  const dataAttendance = [
    { name: "Group A", value: 92, fill: "orange" },
    { name: "Group B", value: 8, fill: "#040558" },
  ];

  return (
    <div className="single-student-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="single-student">
          <div className="left">
            <div className="top">
              <div className="user-info-card">
                <div className="image-container">
                  <img src={photo} alt="" />
                </div>
                <div className="name-desc">
                  <div>
                    <h1 className="name">Leonard Raze</h1>
                  </div>
                  <p className="detail">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="other-info">
                    <div className="line">
                      <FaLocationDot className="icon" />
                      <span>Douala Bassa</span>
                    </div>
                    <div className="line">
                      <ImCalendar className="icon" />
                      <span>Janvier 2025</span>
                    </div>
                    <div className="line">
                      <FaPhone className="icon" />
                      <span>+2370903947</span>
                    </div>
                    <div className="line">
                      <GrMail className="icon" />
                      <span>leonard@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-card-container">
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>90%</h1>
                    <span>Attendance</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>10</h1>
                    <span>Classes</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>7</h1>
                    <span>Subjects</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>90%</h1>
                    <span>Attendance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <h1>Student's Schedule</h1>
                <BsCalendar3 style={{ width: "20px", height: "20px" }} />
              </div>
              {/* <BigCalendar
                handleDisplayCalendar={handleDisplayCalendar}
                date_={date_}
              /> */}
            </div>
          </div>
          <div className="right">
            <div className="courses-classes-container">
              <h1 className="title">Matières & Classes</h1>
              <div className="scroll-table">
                <table className="table-container">
                  <thead>
                    <tr className="table-row">
                      {columns.map((col) => {
                        return <th key={col.accessor}>{col.header}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">History</span>
                      </td>
                      <td className="related-classes">1A,5E,Tle</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Geography</span>
                      </td>
                      <td className="related-classes">1A,5E,Tle</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Accounting & Finance</span>
                      </td>
                      <td className="related-classes">1A,5E,Tle</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Psychology</span>
                      </td>
                      <td className="related-classes">1A,5E,Tle</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Music</span>
                      </td>
                      <td className="related-classes">1A,5E,Tle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Performance title="Assiduité" data={dataAttendance} />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
