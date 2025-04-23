import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import "./Classes.scss";
import { IoFilterOutline } from "react-icons/io5";
import { SlEye } from "react-icons/sl";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { classesData } from "../../data/data";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";

type Class = {
  id: string;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "table-data",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "table-data",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Classes = () => {
  const renderRow = (item: Class) => {
    return (
      <tr key={item.id} className="row-data">
        <td className="icon-name">
          <IoFilterOutline className="icon" />
          {item.name}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.capacity}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.grade}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.supervisor}
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
    <div className="list-classes-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-classes">
          <div className="sub-container">
            <h1>Classes</h1>
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
          <Table columns={columns} renderRow={renderRow} data={classesData} />
          <Pagination itemsLength={classesData.length} />
        </div>
      </div>
    </div>
  );
};

export default Classes;
