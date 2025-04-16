import "./Classes.scss";

type Subject = {
  id: string;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "table-data",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Classes = () => {
  return <div>Classes</div>;
};

export default Classes;
