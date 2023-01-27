import axios from "axios";
import { RootState } from "configStore";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const LoginHistory = () => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  useEffect(() => {

    getData()
  }, [])
  const data = [
    {
      account: "admin",
      name: "Nguyễn Trần Hùng",
      position: "Quản lý hệ thống",
      time: "10:00",
      date: "07/01/2023"
    },
    {
      account: "quanly1",
      name: "Nguyễn Thị Dung",
      position: "Quản lý nhân sự",
      time: "11:00",
      date: "08/01/2023"
    },
    {
      account: "quanly2",
      name: "Nguyễn Trần Thanh Vy",
      position: "Quản lý sản phẫm",
      time: "19:45",
      date: "10/01/2023"
    },
    {
      account: "quanly3",
      name: "Nguyễn Trần Việt Hưng",
      position: "Quản lý bán hàng",
      time: "12:55",
      date: "11/01/2023"
    },
  ];
  return (
    <div className="xl:w-1/2 w-full p-2 ">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            lịch sử đăng nhập
          </span>
          <div className="dark:text-white">

            <i className="fa fa-search cursor-pointer ml-2"></i>
          </div>
        </div>
        <div className="h-60 overflow-auto">
          <table className="w-full mt-3 ">
            <tbody>
              {data.map((datas, index) => {
                return (
                  <tr
                    key={index}
                    className=" border-b hover:bg-blue-100 dark:hover:bg-gray-600  "
                  >

                    <td className="text-sm py-4 px-1 whitespace-nowrap dark:text-white">
                      <span className="">{datas.name}</span>
                      <p className=" font-normal  pt-2 text-descript-light whitespace-nowrap">
                        {datas.position}
                      </p>
                    </td>
                    <td className="text-sm py-4 px-1 whitespace-nowrap dark:text-white">
                      <span className="">{ip}</span>
                      <p className=" font-normal  pt-2 text-descript-light whitespace-nowrap">
                        {datas.account}
                      </p>
                    </td>

                    <td className="text-center text-sm py-4 px-1 whitespace-nowrap dark:text-white">
                      <span className="">{datas.time}</span>
                      <p className=" font-normal pt-2 text-descript-light whitespace-nowrap">
                        {datas.date}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginHistory;
