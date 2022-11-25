import PieChartDashboard from "Components/Dashboard/PieChartDashboard";
// import { PieCharts } from "Interface/PieChart";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
type Props = {};

const HomePage = (props: Props) => {
  const data = [
    { name: "Group A", value: 300 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 200 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 200 },
  ];

  const radius = "120";
  return (
    <div className="font-semibold flex flex-start flex-wrap lg:flex-nowrap h-screen w-full bg-gray-100">
      <div className=" bg-gray-700 h-72 lg:w-1/2 w-full ">
        <PieChartDashboard data={data} radius={radius} />
      </div>
      <div className=" bg-gray-700 h-72 lg:w-1/2 w-full ">
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomePage;
