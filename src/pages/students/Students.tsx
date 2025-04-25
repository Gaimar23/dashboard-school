import { Link } from "react-router-dom";
import "./Students.scss";
import { SlEye } from "react-icons/sl";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import { role, studentsData } from "../../data/data";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import AddStudent from "../../components/formModal/addStudent/AddStudent";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  // grade: string;
  parents: string[];
  class: string;
  address: string;
  gender: string;
  password: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "table-data",
  },
  {
    header: "Parents",
    accessor: "parents",
    className: "table-data",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "table-data",
  },
  {
    header: "Address",
    accessor: "address",
    className: "table-data-second",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Students = () => {
  const [showAddStudent, setShowAddStudent] = useState(false);

  const renderRow = (item: Student) => {
    return (
      <tr key={item.id} className="row-data">
        <td className="image-name-class">
          <img src={item.photo} alt="" className="image" />
          <div className="name-class">
            <h3>{item.name}</h3>
            <p>{item?.class}</p>
          </div>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.studentId}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.parents.join(",").length > 14
            ? item.parents.join(",").substring(0, 14) + "..."
            : item.parents.join(",")}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.phone}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.address}
        </td>
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to={`/list/students/${item.id}`}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#040558",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              >
                <SlEye style={{ width: "20px", height: "20px" }} />
              </button>
            </Link>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                color: "white",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              <SlEye style={{ width: "20px", height: "20px" }} />
            </button>

            {/* {role === "admin" && <FormModal />} */}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="list-students-container">
      <Menu />
      <div className="right">
        <Navbar />
        {showAddStudent && <AddStudent setShowAddStudent={setShowAddStudent} />}
        <div className="list-students">
          <div className="sub-container">
            <h1>Elèves</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={() => setShowAddStudent(true)}>
                  <IoPersonAddSharp className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={studentsData} />
          <Pagination itemsLength={studentsData.length} />
        </div>
      </div>
    </div>
  );
};

export default Students;
