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
const TotalSales = () => {
  const data = [
    {
      name: "T1",

      pv: 2400,
    },
    {
      name: "T2",

      pv: 1398,
    },
    {
      name: "T3",

      pv: 6700,
    },
    {
      name: "T4",

      pv: 3908,
    },
    {
      name: "T5",

      pv: 4800,
    },
    {
      name: "T6",

      pv: 3800,
    },
    {
      name: "T7",

      pv: 5300,
    },
    {
      name: "T8",

      pv: 6300,
    },
    {
      name: "T9",

      pv: 4300,
    },
    {
      name: "T10",

      pv: 7300,
    },
    {
      name: "T11",

      pv: 3300,
    },
    {
      name: "T2",

      pv: 1300,
    },

  ];
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label text-green-500">{`${label} : ${payload[0].value}`}</p>
          <p className="desc text-yellow-500">Danh Số Tháng {label}.</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="w-full p-2 ">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            Doanh Thu Theo Tháng
          </span>
          <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i>
        </div>
        <div className="h-60 z-0 mt-4 w-full ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={1000}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#98a6ad" />
              <YAxis stroke="#98a6ad"/>
              <Tooltip content={<CustomTooltip />} />
             
              <Bar dataKey="pv" barSize={30} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
