import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Teachers.scss";
import { role, teachersData } from "../../data/data";
import FormModal from "../../components/formModal/FormModal";
import TableSearch from "../../components/tableSearch/TableSearch";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { SlEye } from "react-icons/sl";

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
          <div>
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
        <div className="list-teachers">
          <div className="sub-container">
            <h1>Enseignants</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button>
                  <IoFilterOutline className="icon" />
                </button>
                <button>
                  <FaSortAmountDownAlt className="icon" />
                </button>
                {role === "admin" && <FormModal />}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={teachersData} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
