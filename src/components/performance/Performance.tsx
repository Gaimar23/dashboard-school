import "./Performance.scss";
import { TfiMoreAlt } from "react-icons/tfi";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

// const data = [
//   { name: "Group A", value: 92, fill: "orange" },
//   { name: "Group B", value: 8, fill: "#040558" },
// ];

const Performance = ({ title, data }: { title: string; data: any[] }) => {
  return (
    <div className="performance-container">
      <div className="title-icon">
        <h1>{title}</h1>
        <TfiMoreAlt className="icon" />
      </div>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            dataKey={"value"}
            startAngle={180}
            endAngle={0}
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={70}
            // fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="stat-container">
        <h1>9.6</h1>
        <p>of ten max</p>
      </div>
      <h2>1st semester - 2nd semester</h2>
    </div>
  );
};

export default Performance;
