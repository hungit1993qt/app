import PieChartDashboard from "Components/Dashboard/PieChartDashboard";
// import { PieCharts } from "Interface/PieChart";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
type Props = {};

const HomePage = (props: Props) => {
  const data = [
    { name: "Direct", value: 500 },
    { name: "Affilliate", value: 300 },
    { name: "Sponsored", value: 900 },
    { name: "E-mail", value: 400 },
  ];
  const colorpie = [
    "text-piecolor1",
    "text-piecolor2",
    "text-piecolor3",
    "text-piecolor4",
  ];

  return (
    <div className="font-semibold text-text-number flex content-start flex-wrap lg:flex-nowrap  w-full bg-content">
      <div className=" bg-box  lg:w-1/4 w-full m-4 p-6 shadow-lg ">
        <div className="flex justify-between items-center ">
          <span className="uppercase">total sales</span>
          <i className="fa fa-ellipsis-v"></i>
        </div>
        <div className="h-60 ">
          <PieChartDashboard data={data} radius={"110"} />
        </div>
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center border-b-border-color border-b mb-2"
            >
              <span className="flex items-center mb-2">
                <i className={`fa fa-square ${colorpie[index]} mr-2`}></i>
                {data.name}
              </span>
              <span>{data.value}$</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
