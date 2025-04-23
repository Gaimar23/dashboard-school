import React, { useState } from "react";
import "./Pagination.scss";
import { MdArrowCircleRight } from "react-icons/md";
import { MdArrowCircleLeft } from "react-icons/md";

interface PaginationProps {
  itemsLength: number;
  itemsPerPage?: number;
  // handleClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsLength,
  itemsPerPage = 10,
}) => {
  const [currentPage, setcurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(itemsLength / itemsPerPage);

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setcurrentPage(page);
  };

  // const paginatedItems = items.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  return (
    <div className="pagination-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            border: "none",
            cursor: "pointer",
            backgroundColor: "#e2e8f0",
            borderRadius: "20px",
            padding: "6px 10px",
            width: "100px",
            color: "black",
            opacity: currentPage === 1 ? "0.5" : "1",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <MdArrowCircleLeft style={{ width: "20px", height: "20px" }} />
          <span>Préc</span>
        </button>
        {/* {Array.from({ length: totalPages }, (_, idx) => (
          <button key={idx + 1} onClick={() => handleClick(idx + 1)}>
            {idx + 1}
          </button>
        ))} */}
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            border: "none",
            cursor: "pointer",
            // backgroundColor: "#040558",
            backgroundColor: "#e2e8f0",
            borderRadius: "20px",
            padding: "6px 10px",
            width: "100px",
            color: "black",
            opacity: currentPage === totalPages ? "0.5" : "1",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <span>Suiv</span>
          <MdArrowCircleRight style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#e2e8f0",
          minWidth: "80px",
          padding: "4px 10px",
          borderRadius: "20px",
          textAlign: "center",
          color: "black",
        }}
      >
        <span>{currentPage}</span>/<span>{totalPages}</span>
      </div>
    </div>
  );
};

export default Pagination;
