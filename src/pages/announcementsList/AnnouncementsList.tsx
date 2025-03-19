import "./AnnouncementsList.scss";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";
import TableSearch from "../../components/tableSearch/TableSearch";
import { role } from "../../data/data";
import FormModal from "../../components/formModal/FormModal";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementsList = () => {
  const renderRow = (item: Announcement) => {
    return (
      <tr key={item.id} className="data-row">
        <td>{item.title}</td>
        <td>{item.class}</td>
        <td>{item.date}</td>
        <td>
          <div>
            {role === "admin" && (
              <>
                <FormModal />
                <FormModal />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="announcements-subcontainer">
      <div className="top">
        <h1>Tous les annonces</h1>
        <div className="table">
          <TableSearch />
          <div className="buttons">
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
      <Table />
      <Pagination />
    </div>
  );
};

export default AnnouncementsList;
