import React from "react";

type Props = {};

const WidgetSystems = (props: Props) => {
  const data = [
    {
      title: "Dự án",
      value: "168",
      icon: "fa fa-briefcase",
    },
    {
      title: "Tài khoản",
      value: "368",
      icon: "fa fa-user-friends",
    },
    {
      title: "Doanh thu",
      value: "868",
      icon: "fa fa-money-bill-wave-alt",
    },
    {
      title: "Lợi nhuận",
      value: "468",
      icon: "fab fa-sketch",
    },
  ];
  return (
    <div className="w-full p-2 ">
      <div className="shadow box-border p-4 bg-box dark:bg-dark h-full ">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            thống kê tổng quát
          </span>
        </div>
        <div className="z-0 mt-4 w-full flex flex-row outline-none flex-wrap xl:flex-wrap">
          {data.map((data,index)=>{
            return(<div key={index} className="flex flex-col xl:w-1/4 lg:w-1/2  w-full gap-y-2  items-center border p-4 shadow-sm">
              <i className={`${data.icon} text-descript-light text-3xl`}></i>
              <span className=" font-bold text-2xl">{data.value}</span>
              <span className="text-xl text-descript-light">{data.title}</span>
            </div>)
          })}
          
        </div>
      </div>
    </div>
  );
};

export default WidgetSystems;
