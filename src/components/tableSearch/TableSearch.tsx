import "./TableSearch.scss";
import { IoIosSearch } from "react-icons/io";

const TableSearch = () => {
  return (
    <div className="table-search-container">
      <IoIosSearch className="icon" />
      <input type="text" placeholder="Chercher..." />
    </div>
  );
};

export default TableSearch;
