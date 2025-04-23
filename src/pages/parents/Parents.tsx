import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import "./Parents.scss";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { SlEye } from "react-icons/sl";
import { parentsData, role } from "../../data/data";
// import FormModal from "../../components/formModal/FormModal";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";

type Parent = {
  id: string;
  name: string;
  email?: string;
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
  const renderRow = (item: Parent) => {
    return (
      <tr key={item.id} className="row-data">
        <td className="info-name-email">
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
    <div className="list-parents-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-parents">
          <div className="sub-container">
            <h1>Parents</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button>
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
          <Pagination itemsLength={parentsData.length} />
        </div>
      </div>
    </div>
  );
};

export default Parents;
