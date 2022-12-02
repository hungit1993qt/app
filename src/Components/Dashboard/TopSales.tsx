import PieChartDashboard from "Components/Dashboard/PieChartDashboard";
import { RootState } from "configStore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "recharts";
import Option from "./Option";
type Props = {};

const TopSales = (props: Props) => {
  const [radius, setRadius] = useState("");
  const { openSideBar } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    openSideBar ? setRadius("110") : setRadius("80");
  }, [openSideBar]);
  const data = [
    { name: "Liên kết qua kênh Trực tiếp", value: 400 },
    { name: "Liên kết với người nổi tiếng", value: 600 },
    { name: "Liên kết qua kênh Facebook", value: 900 },
    { name: "Liên kết qua kênh E-mail", value: 400 },
  ];
  const colorpie = [
    "text-piecolor1",
    "text-piecolor2",
    "text-piecolor3",
    "text-piecolor4",
  ];
  return (
    <div className="xl:w-1/4 lg:w-1/2 w-full p-2 ">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            xếp hạng kênh maketing
          </span>
          {/* <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i> */}
          <Option />
        </div>
        <div className="h-60 z-0 mt-4 ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChartDashboard data={data} radius={radius} />
            
          </ResponsiveContainer>
        </div>
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between mt-3 text-xs items-center border-b-border-color border-b"
            >
              <span className="flex items-center py-4 dark:text-white">
                <i className={`fa fa-square ${colorpie[index]} mr-2`}></i>
                {data.name}
              </span>
              <span className="dark:text-white">{data.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSales;
