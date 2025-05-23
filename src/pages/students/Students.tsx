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
import { useEffect, useState } from "react";
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

  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    handleRowsStyle();
  }, []);

  const handleRowsStyle = () => {
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
  };

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
                  .map((info, index) => {
                    return (
                      <tr className="row-data" key={`S${index}`}>
                        <td className="image-name-class">
                          <img
                            src="do not render the element at all"
                            alt=""
                            className="image"
                            style={{ opacity: "0" }}
                          />
                          <div className="name-class">
                            <h3 style={{ opacity: "0" }}>John Glover</h3>
                            <p style={{ opacity: "0" }}>3A</p>
                          </div>
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

          <Pagination itemsLength={studentsData.length} />
        </div>
      </div>
    </div>
  );
};

export default Students;
