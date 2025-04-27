import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import "./Subjects.scss";
import { IoFilterOutline } from "react-icons/io5";
import { SlEye } from "react-icons/sl";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { subjectsData } from "../../data/data";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";

type Subject = {
  id: string;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Subjects = () => {
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const renderRow = (item: Subject) => {
    return (
      <tr key={item.id} className="row-data">
        <td style={{ fontSize: "14px" }} className="icon-name">
          <IoFilterOutline className="icon" />
          <h3>{item.name}</h3>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.teachers.join(",").length > 38
            ? item.teachers.join(",").substring(0, 37) + "..."
            : item.teachers.join(",")}
        </td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
                color: "white",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              <SlEye style={{ width: "20px", height: "20px" }} />
            </button>
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
    <div className="list-subjects-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-subjects">
          <div className="sub-container">
            <h1>Subjects</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button>
                  <MdAddCircle className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={subjectsData} />

          {/* add rows */}
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            className="count-row"
          >
            <tbody>
              {subjectsData.length < 10 &&
                countRow
                  .slice(0, countRow.length - subjectsData.length)
                  .map((info) => {
                    return (
                      <tr key={`S${info}`} className="row-data">
                        <td style={{ fontSize: "14px" }} className="icon-name">
                          <IoFilterOutline
                            className="icon"
                            style={{ opacity: "0" }}
                          />
                          <h3 style={{ opacity: "0" }}>Chemistry</h3>
                        </td>
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

          <Pagination itemsLength={subjectsData.length} />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
