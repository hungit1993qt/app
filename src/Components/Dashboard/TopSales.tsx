import PieChartDashboard from "Components/Dashboard/PieChartDashboard";
type Props = {};

const TopSales = (props: Props) => {
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
    <div className=" bg-box  lg:w-1/3 w-full p-6 shadow box-border border ">
      <div className="flex justify-between items-center ">
        <span className="uppercase font-bold">total sales</span>
        <i className="fa fa-ellipsis-v"></i>
      </div>
      <div className="h-60 z-0 ">
        <PieChartDashboard data={data} radius={"100"} />
      </div>
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center border-b-border-color border-b"
          >
            <span className="flex items-center py-3">
              <i className={`fa fa-square ${colorpie[index]} mr-2`}></i>
              {data.name}
            </span>
            <span>{data.value}$</span>
          </div>
        );
      })}
    </div>
  );
};

export default TopSales;
