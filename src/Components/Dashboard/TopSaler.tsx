import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";
import { RootState } from "configStore";
import { useEffect, useState, PureComponent } from "react";
import { useSelector } from "react-redux";
import { Brush } from "@mui/icons-material";
type Props = {};

const TopSaler = (props: Props) => {
  const [radius, setRadius] = useState("");
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  
  useEffect(() => {
    openSideBar ? setRadius("120") : setRadius("90");
  }, [openSideBar]);
  const data = [
    {
      name: "Mr.Nguyen",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Ms.Hoang",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Ms.Quynh",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="xl:w-1/4 lg:w-1/2 w-full p-2 ">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            total sales
          </span>
          <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i>
        </div>
        <div className="h-60 z-0 mt-8 text-xs ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={600}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: -25,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-60 z-0 mt-8 text-xs ">
          <ResponsiveContainer
            className="mt-3 xl:mt-5"
            width="100%"
            height="100%"
          >
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 5,
                right: 0,
                left: -25,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#82ca9d"
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
