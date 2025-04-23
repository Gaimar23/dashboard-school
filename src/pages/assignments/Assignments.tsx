import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import "./Assignments.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { IoMdCloudDownload } from "react-icons/io";
import Pagination from "../../components/pagination/Pagination";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";

type assignmentData = {
  _id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  teacher: string;
  due_date: Date;
  assigned_date: Date;
  attachement_url: string;
  status: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Description",
    accessor: "description",
    className: "table-data",
  },
  {
    header: "Class",
    accessor: "class",
    className: "table-data",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "table-data",
  },
  {
    header: "Due date",
    accessor: "due_date",
    className: "table-data",
  },
  {
    header: "Status",
    accessor: "status",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const allData = [
  {
    _id: "001",
    title: "Fonctions exponentiel",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    subject: "Mathématique",
    class: "4A",
    teacher: "Mora Damien",
    due_date: new Date(2025, 5, 15, 0, 0),
    assigned_date: new Date(2025, 5, 15, 0, 0),
    attachement_url: "http:www.moma/pdf",
    status: "En cours",
  },
  {
    _id: "002",
    title: "Théorie de la critique",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    subject: "Philosophie",
    class: "5E",
    teacher: "Solamo",
    due_date: new Date(2025, 6, 3, 0, 0),
    assigned_date: new Date(2025, 5, 15, 0, 0),
    attachement_url: "http:www.moma/pdf",
    status: "Clos",
  },
  {
    _id: "003",
    title: "La loi de l'offre & la demande",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    subject: "Economie",
    class: "4A",
    teacher: "Mora Damien",
    due_date: new Date(2025, 5, 15, 0, 0),
    assigned_date: new Date(2025, 5, 15, 0, 0),
    attachement_url: "http:www.moma/pdf",
    status: "En cours",
  },
  {
    _id: "004",
    title: "Fonctions exponentiel",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    subject: "Mathématique",
    class: "4A",
    teacher: "Mora Damien",
    due_date: new Date(2025, 5, 15, 0, 0),
    assigned_date: new Date(2025, 5, 15, 0, 0),
    attachement_url: "http:www.moma/pdf",
    status: "En cours",
  },
];

const Assignments = () => {
  const renderRow = (item: assignmentData) => {
    return (
      <tr key={item._id} className="row-data">
        <td className="subject-title">
          <h3>{item.subject}</h3>
          <p>{item.title}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.description.length > 30
            ? item.description.substring(0, 30) + "..."
            : item.description}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.class}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.teacher}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.due_date?.toLocaleDateString().substring(0, 10)}
        </td>
        <td
          style={{
            fontSize: "14px",
          }}
          className="inner-data"
        >
          <span
            style={{
              backgroundColor: item.status === "Clos" ? "orange" : "#040558",
              width: "75px",
              padding: "3px",
              borderRadius: "10px",
              color: "white",
              display: "block",
              textAlign: "center",
            }}
          >
            {item.status}
          </span>
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
                // color: "white",
                // borderRadius: "50%",
                // padding: "2px",
              }}
            >
              <IoMdCloudDownload
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
                // color: "white",
                // borderRadius: "50%",
                // padding: "2px",
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
    <div className="list-assignments-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-assignments">
          <div className="sub-container">
            <h1>Assignments</h1>
            <div className="up"></div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={allData} />
          <Pagination itemsLength={allData.length} />
        </div>
      </div>
    </div>
  );
};

export default Assignments;
