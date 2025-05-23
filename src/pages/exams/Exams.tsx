import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import "./Exams.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import Pagination from "../../components/pagination/Pagination";
import { IoFilterOutline } from "react-icons/io5";
import TableSearch from "../../components/tableSearch/TableSearch";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddExam from "../../components/formModal/addExam/AddExam";

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
  // {
  //   header: "Description",
  //   accessor: "description",
  //   className: "table-data",
  // },
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
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];
  const [showAddExam, setShowAddExam] = useState(false);

  useEffect(() => {
    handleRowsStyle();
  }, []);

  const handleRowsStyle = () => {
    if (allData.length % 2 === 0) {
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

  const renderRow = (item: Exam) => {
    return (
      <tr key={item._id} className="row-data">
        <td
          className=""
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
          <IoFilterOutline
            style={{
              width: "20px",
              height: "20px",
              opacity: "0.5",
              display: "none",
            }}
          />
          <div className="subject-title">
            <h3>{item.subject}</h3>
            <p>
              {item.title.length > 22
                ? item.title.substring(0, 22) + "..."
                : item.title}
            </p>
          </div>
        </td>
        {/* <td style={{ fontSize: "14px" }} className="inner-data">
          {item.description.length > 30
            ? item.description.substring(0, 30) + "..."
            : item.description}
        </td> */}
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
                backgroundColor: "transparent",
                padding: "1px 5px",
                borderRadius: "10px",
                color: "black",
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
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              <SlEye
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040558",
                border: "none",
                cursor: "pointer",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              <TiDocumentDelete
                style={{ width: "20px", height: "20px", color: "white" }}
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
        {showAddExam && <AddExam setShowAddExam={setShowAddExam} />}
        <div className="list-exams">
          <div className="sub-container">
            <h1>Exams</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={() => setShowAddExam(true)}>
                  <MdAddCircle className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
                {/* {role === "admin" && <FormModal />} */}
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={allData} />

          {/* add rows */}
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            className="count-row"
            id="count-row"
          >
            <tbody>
              {allData.length < 8 &&
                countRow
                  .slice(0, countRow.length - allData.length)
                  .map((info) => {
                    return (
                      <tr key={`S${info}`} className="row-data">
                        <td
                          className=""
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0px",
                          }}
                        >
                          <IoFilterOutline
                            style={{
                              width: "20px",
                              height: "20px",
                              opacity: "0.5",
                              display: "none",
                            }}
                          />
                          <div className="subject-title">
                            <h3 style={{ opacity: "0" }}>Sciences sociales</h3>
                            <p style={{ opacity: "0" }}>
                              Fonctions exponentiel
                            </p>
                          </div>
                        </td>
                        <td className="term-class inner-data">
                          <h3></h3>
                          <p></p>
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
                          style={{
                            fontSize: "14px",
                          }}
                          className="inner-data"
                        >
                          <span
                            style={{
                              width: "56px",
                              textAlign: "center",
                              display: "flex",
                              flexDirection: "column",
                              gap: "2px",
                            }}
                          >
                            <span
                              style={{
                                backgroundColor: "transparent",
                                padding: "1px 5px",
                                borderRadius: "10px",
                                color: "black",
                                marginBottom: "1px",
                                opacity: "0",
                              }}
                            >
                              13h00
                            </span>{" "}
                            <span
                              style={{
                                backgroundColor: "orange",
                                padding: "1px 5px",
                                borderRadius: "10px",
                                color: "white",
                                opacity: "0",
                              }}
                            >
                              13h00
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
                          ></div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          {/*  */}

          <Pagination itemsLength={allData.length} />
        </div>
      </div>
    </div>
  );
};

export default Exams;
