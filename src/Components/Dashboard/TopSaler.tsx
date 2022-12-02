import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

import { Brush } from "@mui/icons-material";
import Option from "./Option";
type Props = {};

const TopSaler = (props: Props) => {
  const data = [
    {
      name: "Phương",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Nguyễn",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Hùng",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-content-dark rounded-lg p-4 outline-none dark:border-boder-drop-modal-dark border">
          <p className=" text-descript-light text-lg outline-none">{`${label}`}</p>
          <p className=" text-purple outline-none">
            Mục tiêu tháng {payload[0].value}.
          </p>
          <p className=" text-green-500 outline-none">
            Doanh số tháng {payload[1].value}.
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="xl:w-1/4 lg:w-1/2 w-full p-2 ">
      <div className="shadow box-border border px-4 py-2 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm mt-2">
            xếp hạng cá nhân
          </span>
          {/* <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i> */}
          <Option />
        </div>
        <div className="h-60 z-0 mt-8 text-xs dark:text-white">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={600}
              height={500}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#98a6ad" />
              <YAxis stroke="#98a6ad" />
              <Tooltip
                content={<CustomTooltip />}
                wrapperStyle={{ outline: "none" }}
                cursor={{fill: '#4b5563'}}
              />

              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-60 z-0 mt-1 text-xs dark:text-white">
          <ResponsiveContainer className="" width="100%" height="100%">
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 0,
                right: 0,
                left: -20,
                bottom: -5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#98a6ad" />
              <YAxis stroke="#98a6ad" />
              <Tooltip
                content={<CustomTooltip />}
                wrapperStyle={{ outline: "none" }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                fill="#8884d8"
                color="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                fill="#82ca9d"
                color="#82ca9d"
              />
              <Brush />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TopSaler;
