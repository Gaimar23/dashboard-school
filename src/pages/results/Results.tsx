import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Results.scss";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { CgNotes } from "react-icons/cg";
import TableSearch from "../../components/tableSearch/TableSearch";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddResult from "../../components/formModal/addResult/AddResult";

type Result = {
  _id: string;
  tenant_id: string;
  academic_year: string;
  term: string;
  class: string;
  subject: string;
  student: string;
  score: number;
  remarks: string;
  created_at: Date;
  updated_at: Date;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  //   {
  //     header: "Subject",
  //     accessor: "subject",
  //     className: "table-data",
  //   },
  {
    header: "Student & Class",
    accessor: "student",
    className: "table-data",
  },
  {
    header: "Score",
    accessor: "score",
    className: "table-data",
  },
  {
    header: "Année",
    accessor: "academic_year",
    className: "table-data",
  },
  //   {
  //     header: "Modification",
  //     accessor: "student",
  //     className: "table-data",
  //   },

  //   {
  //     header: "Date",
  //     accessor: "exam_date",
  //     className: "table-data",
  //   },
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
    student: "David Okoko",
    score: 17,
    remarks: 20,
  },
  {
    _id: "002",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Economie",
    student: "David Okoko",
    score: 17,
    remarks: 20,
  },
  {
    _id: "003",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "4A",
    subject: "Economie",
    student: "Sarah Mensah",
    score: 13,
    remarks: 20,
  },
  {
    _id: "004",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "5A",
    subject: "Droit",
    student: "Sarah Mensah",
    score: 18,
    remarks: 20,
  },
  {
    _id: "005",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "Tle",
    subject: "Comptabilité",
    student: "Kengne Stéphanie",
    score: 10,
    remarks: 20,
  },
  {
    _id: "006",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "2e Séquence",
    class: "Tle",
    subject: "Comptabilité",
    student: "Kengne Stéphanie",
    score: 14,
    remarks: 20,
  },
  {
    _id: "007",
    tenant_id: "Aron293709°0",
    academic_year: "2025/2024",
    term: "1er Séquence",
    class: "Tle",
    subject: "Comptabilité",
    student: "Bonano Rafael",
    score: 13,
    remarks: 20,
  },
];

const Results = () => {
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];
  const [showAddResult, setShowAddResult] = useState(false);

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

  const renderRow = (item: Result) => {
    return (
      <tr key={item._id} className="row-data">
        <td
          className=""
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
          <CgNotes style={{ width: "12px", height: "12px", opacity: "0.5" }} />
          <div className="subject-term">
            <h3>{item.subject}</h3>
            <p>{item.term}</p>
          </div>
        </td>
        <td className="student-class inner-data">
          <h3>{item.student}</h3>
          <p>{item.class}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.score}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.academic_year}
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
    <div className="list-results-container">
      <Menu />
      <div className="right">
        <Navbar />
        {showAddResult && <AddResult setShowAddResult={setShowAddResult} />}
        <div className="list-results">
          <div className="sub-container">
            <h1>Results</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button onClick={() => setShowAddResult(true)}>
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
                          <CgNotes
                            style={{
                              width: "12px",
                              height: "12px",
                              opacity: "0",
                            }}
                          />
                          <div className="subject-term">
                            <h3 style={{ opacity: "0" }}>Comptabilité</h3>
                            <p style={{ opacity: "0" }}>1er Séquence</p>
                          </div>
                        </td>
                        <td className="student-class inner-data">
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

export default Results;
