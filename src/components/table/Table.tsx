import React from "react";
import "./Table.scss";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-row">
          {columns.map((col) => {
            return (
              <th key={col.accessor} className={col.className}>
                {col.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
