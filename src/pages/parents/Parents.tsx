import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import "./Parents.scss";
import { SlEye } from "react-icons/sl";
import { parentsData, role } from "../../data/data";
// import FormModal from "../../components/formModal/FormModal";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import AddParent from "../../components/formModal/addParent/AddParent";
import { Link } from "react-router-dom";

type Parent = {
  id: string;
  name: string;
  email?: string;
  photo: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Parents = () => {
  const [showAddParent, setShowAddParent] = useState(false);

  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderRow = (item: Parent) => {
    return (
      <tr key={item.id} className="row-data">
        <td className="info-name-email">
          <img src={item.photo} alt="" className="image" />
          <div className="name-email">
            <h3>{item.name}</h3>
            <p>{item?.email}</p>
          </div>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.students.join(",")}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.phone}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.address.length > 20
            ? item.address.substring(0, 20) + "..."
            : item.address}
        </td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link to={`/list/parents/${item.id}`}>
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
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="list-parents-container">
      <Menu />
      <div className="right">
        <Navbar />
        {showAddParent && <AddParent setShowAddParent={setShowAddParent} />}
        <div className="list-parents">
          <div className="sub-container">
            <h1>Parents</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={() => setShowAddParent(true)}>
                  <IoPersonAddSharp className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={parentsData} />

          {/* add rows */}
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            className="count-row"
          >
            <tbody>
              {parentsData.length < 8 &&
                countRow
                  .slice(0, countRow.length - parentsData.length)
                  .map((info) => {
                    return (
                      <tr className="row-data" key={`S${info}`}>
                        <td className="info-name-email">
                          <img
                            src="do not render the element at all"
                            alt=""
                            className="image"
                            style={{ opacity: "0" }}
                          />
                          <div className="name-email">
                            <h3 style={{ opacity: "0" }}>Derek Briggs</h3>
                            <p style={{ opacity: "0" }}>mike@geller.com</p>
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

          <Pagination itemsLength={parentsData.length} />
        </div>
      </div>
    </div>
  );
};

export default Parents;
