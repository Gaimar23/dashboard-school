import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Teachers.scss";
import { role, teachersData } from "../../data/data";
import TableSearch from "../../components/tableSearch/TableSearch";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { SlEye } from "react-icons/sl";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import AddTeacher from "../../components/formModal/addTeacher/AddTeacher";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
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
    header: "Teacher ID",
    accessor: "teacherId",
    className: "table-data",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "table-data",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "table-data",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "table-data-second",
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

const Teachers = () => {
  const [showAddTeacher, setShowAddTeacher] = useState(false);

  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderRow = (item: Teacher) => {
    return (
      <tr key={item.id} className="row-data">
        <td className="image-name-email">
          <img src={item.photo} alt="" className="image" />
          <div className="name-email">
            <h3>{item.name}</h3>
            <p>{item?.email}</p>
          </div>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.teacherId}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.subjects.join(",")}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.classes.join(",")}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.phone}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.address}
        </td>
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to={`/list/teachers/${item.id}`}>
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
    <div className="list-teachers-container">
      <Menu />
      <div className="right">
        <Navbar />
        {showAddTeacher && <AddTeacher setShowAddTeacher={setShowAddTeacher} />}
        <div className="list-teachers">
          <div className="sub-container">
            <h1>Enseignants</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={() => setShowAddTeacher(true)}>
                  <IoPersonAddSharp className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={teachersData} />
          {/* Add rows */}
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            className="count-row"
          >
            <tbody>
              {teachersData.length < 8 &&
                countRow
                  .slice(0, countRow.length - teachersData.length)
                  .map((info, index) => {
                    return (
                      <tr key={`T${index}`} className="row-data">
                        <td className="image-name-email">
                          <img
                            src="do not render the element at all"
                            alt=""
                            className="image"
                            style={{ opacity: "0" }}
                          />
                          <div className="name-email">
                            <h3 style={{ opacity: "0" }}>John Doe</h3>
                            <p style={{ opacity: "0" }}>john@doe.com</p>
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
          <Pagination itemsLength={teachersData.length} />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
