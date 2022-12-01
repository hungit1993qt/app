import PieChartDashboard from "Components/Dashboard/PieChartDashboard";
import { RootState } from "configStore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
type Props = {};

const TopSales = (props: Props) => {
  const [radius, setRadius] = useState("");
  const { openSideBar } = useSelector((state: RootState) => state.auth);
console.log(openSideBar)
  useEffect(() => {
    openSideBar ? setRadius("120") : setRadius("90");
  }, [openSideBar]);
  const data = [
    { name: "Direct", value: 400 },
    { name: "Affilliate", value: 600 },
    { name: "Sponsored", value: 900 },
    { name: "E-mail", value: 400 },
  ];
  const colorpie = [
    "text-piecolor1",
    "text-piecolor2",
    "text-piecolor3",
    "text-piecolor4",
  ];
  console.log(radius);
  return (
    <div className=" bg-box dark:bg-dark lg:w-1/3 w-full p-6 shadow box-border border ">
      <div className="flex justify-between items-center ">
        <span className="uppercase font-bold dark:text-white text-sm">
          total sales
        </span>
        <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i>
      </div>
      <div className="h-60 z-0 mt-9 ">
        <PieChartDashboard data={data} radius={radius} />
      </div>
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className="flex justify-between text-xs items-center border-b-border-color border-b"
          >
            <span className="flex items-center py-3 dark:text-white">
              <i className={`fa fa-square ${colorpie[index]} mr-2`}></i>
              {data.name}
            </span>
            <span className="dark:text-white">{data.value}$</span>
          </div>
        );
      })}
    </div>
  );
};

export default TopSales;
