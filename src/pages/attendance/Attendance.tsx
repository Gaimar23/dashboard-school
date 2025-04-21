import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Attendance.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import Table from "../../components/table/Table";

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
    date: "12/04/2025",
    status: "Present", //Present,Absent,Late
    check_in_time: "12/04/2025",
    check_out_time: "12/04/2025",
    remarks: "good",
    recorded_by: "john",
    created_at: "12/04/2025",
  },
  {
    _id: "002",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    teacher: "MAna Larol",
    date: "12/04/2025",
    status: "Absent", //Present,Absent,Late
    check_in_time: "12/04/2025",
    check_out_time: "12/04/2025",
    remarks: "good",
    recorded_by: "john",
    created_at: "12/04/2025",
  },
  {
    _id: "003",
    tenant_id: "ARON001",
    academic_year: "2025/2026",
    teacher: "Dora Razel",
    date: "12/04/2025",
    status: "Present", //Present,Absent,Late
    check_in_time: "12/04/2025",
    check_out_time: "12/04/2025",
    remarks: "good",
    recorded_by: "john",
    created_at: "12/04/2025",
  },
];

const Attendance = () => {
  const renderRowTeacher = (item: TeacherAttendance) => {
    return (
      <tr key={item._id} className="row-data">
        <td
          className="teacher-date"
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
          <h3>{item.teacher}</h3>
          {/* <p>{item.date?.toLocaleDateString().substring(0, 10)}</p> */}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.academic_year}
        </td>
        <td className="teacher-time inner-data">
          {/* <span>{item.check_in_time?.toLocaleTimeString()}</span>
          <span>{item.check_out_time?.toLocaleTimeString()}</span> */}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.status}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {/* {item.created_at?.toLocaleDateString()} */}
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
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <SlEye
                style={{ width: "20px", height: "20px", color: "#040558" }}
              />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <TiDocumentDelete
                style={{ width: "20px", height: "20px", color: "#040558" }}
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
        <td
          className="student-class"
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
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
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <SlEye
                style={{ width: "20px", height: "20px", color: "#040558" }}
              />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <TiDocumentDelete
                style={{ width: "20px", height: "20px", color: "#040558" }}
              />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="list-attendance-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-attendance">
          <div className="sub-container">
            <h1>Results</h1>
            <div className="up"></div>
          </div>
          <Table
            columns={columns}
            renderRow={renderRowTeacher}
            data={teachersData}
          />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
