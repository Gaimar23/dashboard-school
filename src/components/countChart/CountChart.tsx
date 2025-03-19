import "./CountChart.scss";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiMale } from "react-icons/bi";
import { BiFemale } from "react-icons/bi";

const CountChart = () => {
  const data = [
    {
      name: "Total",
      count: 106,
      fill: "white",
    },
    {
      name: "Girls",
      count: 53,
      fill: "orange",
    },
    {
      name: "Boys",
      count: 53,
      fill: "#040558",
    },
  ];

  return (
    <div className="sub-count-container">
      <div className="title-icon">
        <h1 className="title">Elèves</h1>
        <TfiMoreAlt className="icon" />
      </div>
      <div className="chart">
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="40%"
            outerRadius="100%"
            cx={"50%"}
            cy={"50%"}
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="icons">
          <BiMale className="icon" color="#040558" />
          <BiFemale className="icon" color="orange" />
        </div>
      </div>
      <div className="bottom">
        <div className="first">
          <span className="point" style={{ backgroundColor: "#040558" }}></span>
          <h1>1,234</h1>
          <h2>Boys (55%)</h2>
        </div>
        <div className="second">
          <span className="point" style={{ backgroundColor: "orange" }}></span>
          <h1>1,234</h1>
          <h2>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
