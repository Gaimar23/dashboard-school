import "./SingleParent.scss";
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
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import { FaScaleBalanced } from "react-icons/fa6";

const columns = [
  {
    header: "Student Name",
    accessor: "student",
  },
  {
    header: "Classe",
    accessor: "classe",
    className: "table-data",
  },
];

const SingleParent = () => {
  const dataAttendance = [
    { name: "Group A", value: 92, fill: "orange" },
    { name: "Group B", value: 8, fill: "#040558" },
  ];

  const paiementsData = [
    {
      date: new Date(),
      student: "Damien Okaka Limonba barbama okaolo",
      amount: 230000,
    },
    {
      date: new Date(),
      student: "Damien Okaka Limonba barbama okaolo",
      amount: 230000,
    },
    {
      date: new Date(),
      student: "Damien Okaka Limonba barbama okaolo",
      amount: 230000,
    },
    {
      date: new Date(),
      student: "Damien Okaka Limonba barbama okaolo",
      amount: 230000,
    },
  ];

  const countRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="single-parent-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="single-parent">
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
                    <h1>240000</h1>
                    <span>Scolarité</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>10</h1>
                    <span>Elèves</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <IoFilterOutline className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>125000</h1>
                    <span>Règlement</span>
                  </div>
                </div>
                <div className="card">
                  <div className="icons">
                    <FaScaleBalanced className="icon" />
                    <TfiMoreAlt className="icon" />
                  </div>
                  <div>
                    <h1>115000</h1>
                    <span>Solde</span>
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
                <h1>Historique de paiement</h1>
                <BsCalendar3 style={{ width: "20px", height: "20px" }} />
              </div>
              <div className="history-container">
                <table className="paiement-table">
                  <tbody>
                    {paiementsData.map((info, i) => {
                      return (
                        <tr className="row-data" key={i}>
                          <td className="student">
                            <p style={{ fontSize: "15px" }}>
                              {info.student.length > 25
                                ? info.student.substring(0, 25) + "..."
                                : info.student}
                            </p>
                            <span style={{ fontSize: "12px", opacity: "0.5" }}>
                              {info.date.toLocaleDateString().substring(0, 10)}
                            </span>
                          </td>
                          <td className="amount">{info.amount}</td>
                        </tr>
                      );
                    })}

                    {paiementsData.length < 12 &&
                      countRow
                        .slice(0, countRow.length - paiementsData.length)
                        .map((info, index) => {
                          return (
                            <tr
                              className="row-data"
                              key={index + paiementsData.length}
                            >
                              <td className="student">
                                <p
                                  style={{
                                    fontSize: "15px",
                                    color: "transparent",
                                  }}
                                >
                                  ""
                                </p>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    color: "transparent",
                                  }}
                                >
                                  ""
                                </span>
                              </td>
                              <td
                                className="amount"
                                style={{ color: "transparent" }}
                              >
                                ""
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="students-classe-container">
              <h1 className="title">Students</h1>
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
                        <span className="subject">Damien Ola</span>
                      </td>
                      <td className="related-classes">3E</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Kengne Samantha</span>
                      </td>
                      <td className="related-classes">5E</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Boby olando</span>
                      </td>
                      <td className="related-classes">1A</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Mike quolaru</span>
                      </td>
                      <td className="related-classes">Tle</td>
                    </tr>
                    <tr className="row-data">
                      <td className="icon-subject">
                        <BsCheckCircle className="icon" />
                        <span className="subject">Maoudaou Abama</span>
                      </td>
                      <td className="related-classes">4C</td>
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

export default SingleParent;
