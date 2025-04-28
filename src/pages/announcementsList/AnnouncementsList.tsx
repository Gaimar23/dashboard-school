import "./AnnouncementsList.scss";
import TableSearch from "../../components/tableSearch/TableSearch";
// import { role } from "../../data/data";
// import FormModal from "../../components/formModal/FormModal";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import { BsCalendar3 } from "react-icons/bs";
import { TiDocumentDelete } from "react-icons/ti";
import { SlEye } from "react-icons/sl";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";

type Announcement = {
  _id: string;
  tenant_id: string;
  title: string;
  description: string;
  audience_type: string[]; // "all, teacher,parent,student"
  start_date: Date;
  end_date: Date;
  start_at: Date;
  end_at: Date;
  created_by: string;
  created_at: Date;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Description",
    accessor: "description",
    className: "table-data",
  },
  {
    header: "Start",
    accessor: "start_date",
    className: "table-data",
  },
  {
    header: "End",
    accessor: "end_date",
    className: "table-data",
  },
  {
    header: "Operator",
    accessor: "created_by",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const allData = [
  {
    _id: "okdkd9383°8",
    tenant_id: "HKD792793?",
    title: "Retour de vacance",
    description: "La rentrée est prévu pour le 10/09/2039",
    audience_type: ["Parent", "teacher"], // "all, teacher,parent,student"
    start_date: new Date(),
    end_date: new Date(),
    start_at: new Date(),
    end_at: new Date(),
    created_by: "John Daa",
    created_at: new Date(),
  },
  {
    _id: "okdkd9308UOJR",
    tenant_id: "HKD792793?",
    title: "Exam blanc",
    description: "La rentrée est prévu pour le 10/09/2039",
    audience_type: ["Parent", "teacher"], // "all, teacher,parent,student"
    start_date: new Date(),
    end_date: new Date(),
    start_at: new Date(),
    end_at: new Date(),
    created_by: "John Daa",
    created_at: new Date(),
  },
  {
    _id: "okdkd930123+",
    tenant_id: "HKD792793?",
    title: "Visite du musée de l'orient",
    description: "La rentrée est prévu pour le 10/09/2039",
    audience_type: ["Parent", "teacher", "student"], // "all, teacher,parent,student"
    start_date: new Date(),
    end_date: new Date(),
    start_at: new Date(),
    end_at: new Date(),
    created_by: "Daamo",
    created_at: new Date(),
  },
];

const AnnouncementsList = () => {
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderRow = (item: Announcement) => {
    return (
      <tr key={item._id} className="row-data">
        <td className="icon-title-container">
          <BsCalendar3
            style={{ width: "12px", height: "12px", opacity: "0.5" }}
          />
          <div className="icon-title">
            <p>
              {item.title.length > 22
                ? item.title.substring(0, 22) + "..."
                : item.title}
            </p>
            <span>
              {item.audience_type.join(",").length > 22
                ? item.audience_type.join(",").substring(0, 22) + "..."
                : item.audience_type.join(",")}
            </span>
          </div>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.description.length > 30
            ? item.description.substring(0, 30) + "..."
            : item.description}
        </td>
        <td style={{ fontSize: "14px" }} className="date-time inner-data">
          <h3>{item.start_date?.toLocaleDateString().substring(0, 10)}</h3>
          <p>{item.start_at?.toLocaleTimeString()}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="date-time inner-data">
          <h3>{item.end_date?.toLocaleDateString().substring(0, 10)}</h3>
          <p>{item.end_at?.toLocaleTimeString()}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.created_by.length > 9
            ? item.created_by.substring(0, 9) + ".."
            : item.created_by}
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
                padding: "2px",
                borderRadius: "50%",
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
                padding: "2px",
                borderRadius: "50%",
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
    <div className="list-announcements-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="list-announcements">
          <div className="sub-container">
            <h1>Announcements</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button>
                  <MdAddCircle className="icon" />
                </button>
                <button>
                  <FaArrowAltCircleDown className="icon" />
                </button>
              </div>
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={allData} />

          {/* add rows */}
          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            className="count-row"
          >
            <tbody>
              {allData.length < 8 &&
                countRow
                  .slice(0, countRow.length - allData.length)
                  .map((info) => {
                    return (
                      <tr key={`A${info}`} className="row-data">
                        <td className="icon-title-container">
                          <BsCalendar3
                            style={{
                              width: "12px",
                              height: "12px",
                              opacity: "0",
                            }}
                          />
                          <div className="icon-title">
                            <p style={{ opacity: "0" }}>Retour de vacance</p>
                            <span style={{ opacity: "0" }}>
                              Parent,teacher,student
                            </span>
                          </div>
                        </td>
                        <td
                          style={{ fontSize: "14px" }}
                          className="inner-data"
                        ></td>
                        <td
                          style={{ fontSize: "14px" }}
                          className="date-time inner-data"
                        >
                          <h3 style={{ opacity: "0" }}>28/04/2025</h3>
                          <p style={{ opacity: "0" }}>15:36:51</p>
                        </td>
                        <td
                          style={{ fontSize: "14px" }}
                          className="date-time inner-data"
                        >
                          <h3></h3>
                          <p></p>
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

export default AnnouncementsList;
