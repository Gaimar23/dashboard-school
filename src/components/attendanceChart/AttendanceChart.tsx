import "./AttendanceChart.scss";
import { TfiMoreAlt } from "react-icons/tfi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];

  return (
    <div className="sub-attendance-container">
      <div className="title-icon">
        <h1 className="title">Présence</h1>
        <TfiMoreAlt className="icon" />
      </div>
      <ResponsiveContainer width={"100%"} height={"95%"}>
        <BarChart width={500} height={300} barSize={20} data={data}>
          <CartesianGrid
            strokeDasharray={"3 3"}
            vertical={false}
            stroke="#ddd"
          />
          <XAxis
            dataKey={"name"}
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey={"present"}
            legendType="star"
            radius={[10, 0, 0, 0]}
            fill="#040558"
          />
          <Bar
            dataKey={"absent"}
            legendType="star"
            radius={[10, 0, 0, 0]}
            fill="orange"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
