import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Attendance.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import Table from "../../components/table/Table";
import TableSearch from "../../components/tableSearch/TableSearch";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import AddTeacherAttendance from "../../components/formModal/addTeacherAttendance/AddTeacherAttendance";
import AddStudentAttendance from "../../components/formModal/addStudentAttendance/AddStudentAttendance";
import axios from "axios";
import { SchoolContext } from "../../context/SchoolContext";

type TeacherAttendance = {
  _id: string;
  tenant_id: string;
  academic_year: string;
  teacher: string;
  date: Date;
  status: string; //Present,Absent,Late
  check_in_time: Date;
  check_out_time: Date;
  remarks: string;
  recorded_by: string;
  created_at: Date;
};

type StudentAttendance = {
  _id: string;
  tenant_id: string;
  academic_year: string;
  student: string;
  class: string;
  date: Date;
  status: string; //Present,Absent,Late,excused
  remarks: string;
  recorded_by: string;
  created_at: Date;
};

const columns = [
  {
    header: "Info",
    accessor: "info", //teacher & date
  },
  {
    header: "Année",
    accessor: "academic_year",
    className: "table-data",
  },
  {
    header: "Time",
    accessor: "check_in_time", //check_in_time & check_out_time
    className: "table-data",
  },
  {
    header: "Status",
    accessor: "status",
    className: "table-data",
  },
  {
    header: "Date d'Ajout",
    accessor: "created_at",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const columns2 = [
  {
    header: "Info",
    accessor: "info", //student & class
  },
  {
    header: "Date",
    accessor: "date",
    className: "table-data",
  },
  {
    header: "Année",
    accessor: "academic_year",
    className: "table-data",
  },
  {
    header: "Status",
    accessor: "status",
    className: "table-data",
  },
  {
    header: "Date d'ajout",
    accessor: "created_at",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const teachersData = [
  {
    _id: "001",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    teacher: "Dora Razel",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Present", //Present,Absent,Late
    check_in_time: new Date(2025, 5, 15, 8, 30),
    check_out_time: new Date(2025, 5, 15, 11, 30),
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
  {
    _id: "002",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    teacher: "MAna Larol",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Absent", //Present,Absent,Late
    check_in_time: new Date(2025, 5, 15, 12, 0),
    check_out_time: new Date(2025, 5, 15, 15, 0),
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
  {
    _id: "003",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    teacher: "Dora Razel",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Present", //Present,Absent,Late
    check_in_time: new Date(2025, 5, 15, 0, 0),
    check_out_time: new Date(2025, 5, 15, 0, 0),
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
];

const studentsData = [
  {
    _id: "001",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    student: "Dora Razel",
    class: "Tle",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Present", //Present,Absent,Late
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
  {
    _id: "002",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    student: "MAna Larol",
    class: "Tle",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Absent", //Present,Absent,Late
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
  {
    _id: "003",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    student: "Dora Razel",
    class: "4E",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Present", //Present,Absent,Late
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
  {
    _id: "004",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    student: "ROLA Abima",
    class: "4E",
    date: new Date(2025, 5, 15, 0, 0),
    status: "Present", //Present,Absent,Late
    remarks: "good",
    recorded_by: "john",
    created_at: new Date(2025, 5, 15, 0, 0),
  },
];

const Attendance = () => {
  const [showTeachers, setShowTeachers] = useState<boolean>(true);
  const [showStudents, setShowStudents] = useState<boolean>(false);
  const [showAddTeacherAttendance, setShowAddTeacherAttendance] =
    useState(false);
  const [showAddStudentAttendance, setShowAddStudentAttendance] =
    useState(false);
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];
  const [allTeacherAttendance, setAllTeacherAttendance] = useState<
    TeacherAttendance[]
  >([]);

  const [allStudentAttendance, setAllStudentAttendance] = useState<
    StudentAttendance[]
  >([]);

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  useEffect(() => {
    handleRowsStyle();
  }, []);

  useEffect(() => {
    handleRowsStyle();
  }, [showStudents, showTeachers]);

  const handleRowsStyle = () => {
    if (showTeachers) {
      if (teachersData.length % 2 === 0) {
        const evenRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(even)"
        );
        evenRows.forEach((row) => {
          if (row.classList.contains("odd")) {
            row.classList.remove("odd");
          }
          row.classList.add("even");
        });
        //
        const oddRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(odd)"
        );
        oddRows.forEach((row) => {
          if (row.classList.contains("even")) {
            row.classList.remove("even");
          }
          row.classList.add("odd");
        });
      } else {
        const evenRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(even)"
        );
        evenRows.forEach((row) => {
          if (row.classList.contains("even")) {
            row.classList.remove("even");
          }
          row.classList.add("odd");
        });
        //
        const oddRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(odd)"
        );
        oddRows.forEach((row) => {
          if (row.classList.contains("odd")) {
            row.classList.remove("odd");
          }
          row.classList.add("even");
        });
      }
    } else {
      if (studentsData.length % 2 === 0) {
        const evenRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(even)"
        );
        evenRows.forEach((row) => {
          if (row.classList.contains("odd")) {
            row.classList.remove("odd");
          }
          row.classList.add("even");
        });
        //
        const oddRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(odd)"
        );
        oddRows.forEach((row) => {
          if (row.classList.contains("even")) {
            row.classList.remove("even");
          }
          row.classList.add("odd");
        });
      } else {
        const evenRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(even)"
        );
        evenRows.forEach((row) => {
          if (row.classList.contains("even")) {
            row.classList.remove("even");
          }
          row.classList.add("odd");
        });
        //
        const oddRows = document.querySelectorAll(
          "#count-row .row-data:nth-child(odd)"
        );
        oddRows.forEach((row) => {
          if (row.classList.contains("odd")) {
            row.classList.remove("odd");
          }
          row.classList.add("even");
        });
      }
    }
  };

  const getAllTeacherAttendance = async () => {
    const response = await axios.get(`${url}/api/attendanceTeacher/get`);
    if (response.data.success) {
      setAllTeacherAttendance(response.data.data);
    }
  };

  const getAllStudentAttendance = async () => {
    const response = await axios.get(`${url}/api/attendanceStudent/get`);
    if (response.data.success) {
      setAllStudentAttendance(response.data.data);
    }
  };

  const renderRowTeacher = (item: TeacherAttendance) => {
    return (
      <tr key={item._id} className="row-data">
        <td className="teacher-date">
          <h3>{item.teacher}</h3>
          <p>{item.date?.toLocaleDateString().substring(0, 10)}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.academic_year}
        </td>
        <td className="teacher-time inner-data">
          <span>{item.check_in_time?.toLocaleTimeString()}</span>
          <span>{item.check_out_time?.toLocaleTimeString()}</span>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.status}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.created_at?.toLocaleDateString()}
        </td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <SlEye
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <TiDocumentDelete
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const renderRowStudent = (item: StudentAttendance) => {
    return (
      <tr key={item._id} className="row-data">
        <td className="student-class">
          <h3>{item.student}</h3>
          <p>{item.class}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.date?.toLocaleDateString()}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.academic_year}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.status}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.created_at?.toLocaleDateString()}
        </td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <SlEye
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <TiDocumentDelete
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const handleTeachers = () => {
    if (showTeachers) {
      return;
    } else {
      setShowTeachers((prev) => !prev);
      setShowStudents(false);
    }
  };

  const handleStudents = () => {
    if (showStudents) {
      return;
    } else {
      setShowStudents((prev) => !prev);
      setShowTeachers(false);
    }
  };

  const handleShowAttendance = () => {
    if (showTeachers) {
      setShowAddTeacherAttendance(true);
    } else {
      setShowAddStudentAttendance(true);
    }
  };

  return (
    <div className="list-attendance-container">
      <Menu />
      <div className="right">
        <Navbar />
        {showTeachers && showAddTeacherAttendance && (
          <AddTeacherAttendance
            setShowAddTeacherAttendance={setShowAddTeacherAttendance}
            getAllTeacherAttendance={getAllTeacherAttendance}
          />
        )}
        {showStudents && showAddStudentAttendance && (
          <AddStudentAttendance
            setShowAddStudentAttendance={setShowAddStudentAttendance}
            getAllStudentAttendance={getAllStudentAttendance}
          />
        )}
        <div className="list-attendance">
          <div className="sub-container">
            <h1>Présence</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={handleShowAttendance}>
                  <MdAddCircle className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                <div className="switch-container">
                  <button
                    className="swicth"
                    style={{
                      backgroundColor: showTeachers ? "orange" : "#F7F8FA",
                      color: showTeachers ? "white" : "orange",
                    }}
                    type="button"
                    onClick={handleTeachers}
                  >
                    Teachers
                  </button>
                  <button
                    className="swicth"
                    style={{
                      backgroundColor: showStudents ? "orange" : "#F7F8FA",
                      color: showStudents ? "white" : "orange",
                    }}
                    type="button"
                    onClick={handleStudents}
                  >
                    Students
                  </button>
                </div>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          {showTeachers ? (
            <>
              <Table
                columns={columns}
                renderRow={renderRowTeacher}
                data={teachersData}
              />
              {/* add rows */}
              <table
                style={{ width: "100%", borderCollapse: "collapse" }}
                className="count-row"
                id="count-row"
              >
                <tbody>
                  {teachersData.length < 8 &&
                    countRow
                      .slice(0, countRow.length - teachersData.length)
                      .map((info) => {
                        return (
                          <tr key={`T${info}`} className="row-data">
                            <td className="teacher-date">
                              <h3 style={{ opacity: "0" }}>Dora Razel</h3>
                              <p style={{ opacity: "0" }}>15/06/2025</p>
                            </td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td className="teacher-time inner-data">
                              <span></span>
                              <span></span>
                            </td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "10px",
                                }}
                              ></div>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
              {/*  */}
            </>
          ) : (
            <>
              <Table
                columns={columns2}
                renderRow={renderRowStudent}
                data={studentsData}
              />

              {/* add rows */}
              <table
                style={{ width: "100%", borderCollapse: "collapse" }}
                className="count-row"
                id="count-row"
              >
                <tbody>
                  {studentsData.length < 8 &&
                    countRow
                      .slice(0, countRow.length - studentsData.length)
                      .map((info) => {
                        return (
                          <tr key={`S${info}`} className="row-data">
                            <td className="student-class">
                              <h3 style={{ opacity: "0" }}>Dora Razel</h3>
                              <p style={{ opacity: "0" }}>Tle</p>
                            </td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td
                              style={{ fontSize: "14px" }}
                              className="inner-data"
                            ></td>
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "10px",
                                }}
                              ></div>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
              {/*  */}
            </>
          )}
          {showTeachers && <Pagination itemsLength={teachersData.length} />}
          {!showTeachers && <Pagination itemsLength={studentsData.length} />}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
