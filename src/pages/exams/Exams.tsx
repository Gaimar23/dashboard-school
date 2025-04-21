import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import "./Exams.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import { MdImportExport } from "react-icons/md";
import Pagination from "../../components/pagination/Pagination";

type Exam = {
  _id: string;
  tenant_id: string;
  academic_year: string;
  term: string;
  class: string;
  subject: string;
  title: string;
  description: string;
  total_marks: number;
  exam_date: Date;
  start: string;
  end: string;
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
    header: "Term & Class",
    accessor: "term",
    className: "table-data",
  },
  {
    header: "Année",
    accessor: "academic_year",
    className: "table-data",
  },
  {
    header: "Date",
    accessor: "exam_date",
    className: "table-data",
  },
  {
    header: "Horaire",
    accessor: "start",
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
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Mathématique",
    title: "Fonctions expo",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    total_marks: 20,
    exam_date: new Date(2025, 5, 15, 0, 0),
    start: "14h00",
    end: "16h30",
  },
  {
    _id: "002",
    tenant_id: "ssdf293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Mathématique",
    title: "Fonctions exponentiel",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    total_marks: 20,
    exam_date: new Date(2025, 5, 15, 0, 0),
    start: "08h00",
    end: "09h30",
  },
  {
    _id: "003",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Mathématique",
    title: "Fonctions exponentiel",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    total_marks: 20,
    exam_date: new Date(2025, 5, 15, 0, 0),
    start: "13h00",
    end: "16h00",
  },
  {
    _id: "004",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "5E",
    subject: "Economie",
    title: "L'offre et la demande",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    total_marks: 20,
    exam_date: new Date(2025, 5, 15, 0, 0),
    start: "14h00",
    end: "16h30",
  },
  {
    _id: "005",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Sciences sociales",
    title: "Bien-être social",
    description:
      "Vous appuyant sur les connaissances acquises au travers du cours, vous devez traiter ",
    total_marks: 20,
    exam_date: new Date(2025, 5, 15, 0, 0),
    start: "14h00",
    end: "16h32",
  },
];

const Exams = () => {
  const renderRow = (item: Exam) => {
    return (
      <tr key={item._id} className="row-data">
        <td
          className=""
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
          <MdImportExport style={{ width: "20px", height: "20px" }} />
          <div className="subject-title">
            <h3>{item.subject}</h3>
            <p>{item.title}</p>
          </div>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.description.length > 30
            ? item.description.substring(0, 30) + "..."
            : item.description}
        </td>
        <td className="term-class inner-data">
          <h3>{item.term}</h3>
          <p>{item.class}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.academic_year}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.exam_date?.toLocaleDateString().substring(0, 10)}
        </td>
        <td
          style={{
            fontSize: "14px",
          }}
          className="inner-data"
        >
          <span
            style={{
              width: "56px",
              // display: "block",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                backgroundColor: "#040558",
                padding: "1px 5px",
                borderRadius: "10px",
                color: "white",
                marginBottom: "1px",
              }}
            >
              {item.start}
            </span>{" "}
            <span
              style={{
                backgroundColor: "orange",
                padding: "1px 5px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              {item.end}
            </span>
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
    <div className="list-exams-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-exams">
          <div className="sub-container">
            <h1>Exams</h1>
            <div className="up"></div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={allData} />
          <Pagination itemsLength={allData.length} />
        </div>
      </div>
    </div>
  );
};

export default Exams;
