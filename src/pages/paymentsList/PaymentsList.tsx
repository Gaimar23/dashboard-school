import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import TableSearch from "../../components/tableSearch/TableSearch";
import "./PaymentsList.scss";
import { MdAddCircle } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect } from "react";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";

type PaymentData = {
  _id: string;
  paymentNumber: string;
  student: string;
  class: string;
  date: Date;
  amount: number;
  operator: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info", // payment number & date
  },
  {
    header: "Student",
    accessor: "student",
    className: "table-data",
  },
  {
    header: "Class",
    accessor: "class",
    className: "table-data",
  },
  // {
  //   header: "Date",
  //   accessor: "date",
  //   className: "table-data",
  // },
  {
    header: "Amount",
    accessor: "amount",
    className: "table-data",
  },
  {
    header: "Operator",
    accessor: "operator",
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
    paymentNumber: "Pay001",
    student: "Malice Sona",
    class: "4A",
    date: new Date(2025, 5, 15, 0, 0),
    amount: 200000,
    operator: "patrick",
  },
  {
    _id: "002",
    paymentNumber: "Pay001",
    student: "Malice Sona",
    class: "4A",
    date: new Date(2025, 5, 15, 0, 0),
    amount: 200000,
    operator: "patrick",
  },
  {
    _id: "003",
    paymentNumber: "Pay001",
    student: "Malice Sona",
    class: "5E",
    date: new Date(2025, 5, 15, 0, 0),
    amount: 145000,
    operator: "Sandra",
  },
];

const PaymentsList = () => {
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8];

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

  const renderRow = (item: PaymentData) => {
    return (
      <tr key={item._id} className="row-data">
        <td className="number-date">
          <h3>{item.paymentNumber}</h3>
          <p>{item.date.toLocaleDateString().substring(0, 10)}</p>
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.student}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.class}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.amount}
        </td>
        <td style={{ fontSize: "14px" }} className="inner-data">
          {item.operator}
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
              <MdAddCircle
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
              <FaArrowAltCircleDown
                style={{ width: "20px", height: "20px", color: "#040558" }}
              />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="payments-list-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="payments-list">
          <div className="sub-container">
            <h1>Payments</h1>
            <div className="up">
              <TableSearch />
              <div className="actions">
                <button>
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
                      <tr key={`P${info}`} className="row-data">
                        <td className="number-date">
                          <h3 style={{ opacity: "0" }}>Pay001</h3>
                          <p style={{ opacity: "0" }}>15/06/2025</p>
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

export default PaymentsList;
