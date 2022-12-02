import React, { useEffect, useRef } from "react";
import { setSideBar, setSideBarMobile } from "Slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useOnClickOutside } from "usehooks-ts";
type Props = {};

const Sidebar = (props: Props) => {
  const refSiderBar = useRef(null);

  const dispatch = useDispatch<AppDispatch>();
  const { openSideBar, openSideMobile } = useSelector(
    (state: RootState) => state.auth
  );
  const handleClickOutsideSiderBar = () => {
    dispatch(setSideBarMobile(false));
  };
  // const handleClickInsideSiderBar = () => {
  //   dispatch(setSideBarMobile());
  // };
  useOnClickOutside(refSiderBar, handleClickOutsideSiderBar);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      return dispatch(setSideBar(true));
    } else {
      return dispatch(setSideBar(false));
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const menu = [
    { title: "Tổng quan", src: "Chart_fill" },
    { title: "Tin nhắn", src: "Chat" },
    { title: "Tài khoản", src: "User", gap: false},
    { title: "Lịch họp", src: "Calendar" },
    { title: "Tìm kiếm", src: "Search" },
    { title: "Phân tích", src: "Chart" },
    { title: "Quản Lý ", src: "Folder", gap: false },
    { title: "Cài đặt", src: "Setting" },
  ];
  return (
    <div
      ref={refSiderBar}
      className={`${
        openSideBar ? "w-60" : "w-24"
      } duration-300 h-screen bg-dark pt-8 p-5 fixed lg:translate-x-0 z-20 ${
        openSideMobile ? null : "-translate-x-60"
      }`}
    >
      <i
        className={`${
          openSideBar ? "rotate-[180deg]" : ""
        } fa fa-angle-right hidden lg:block absolute cursor-pointer bg-white text-base -right-3 top-5 w-7 border-2 border-dark-purple text-center rounded-full`}
        onClick={() => dispatch(setSideBar(!openSideBar))}
      ></i>

      <div className="flex gap-x-4 items-center ">
        <i
          className={`fa fa-cog text-5xl text-white duration-500 ${
            !openSideBar && "rotate-[360deg]"
          }`}
        ></i>
        <h1
          className={`text-white origin-left font-medium text-3xl duration-300 whitespace-nowrap ${
            !openSideBar && "scale-0"
          }`}
        >
          Quản lý
        </h1>
        <i
          className={`fa fa-arrow-left lg:hidden block cursor-pointer text-white ml-5 text-2xl
          `}
          onClick={() => dispatch(setSideBarMobile(false))}
        ></i>
      </div>
      <div className="overflow-y-auto h-full">
        <ul className="pt-6 ">
          {menu.map((menu, index: number) => {
            return (
              <li
                className={`text-gray-300 text-sm flex  items-center gap-x-4 cursor-pointer p-4 hover:bg-light-white rounded-md ${
                  menu.gap ? "mt-9" : "mt-2"
                } ${index === 0 && "bg-light-white"}`}
                key={index}
              >
                <img src={`./icon-menu/${menu.src}.png`} alt=""></img>
                <span
                  className={`${
                    !openSideBar && "scale-0 "
                  } origin-left duration-300 } whitespace-nowrap`}
                >
                  {menu.title}
                </span>
              </li>
            );
          })}
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer px-4 py-3 hover:bg-light-white rounded-md 
               `}
          >
            <i className="fa fa-sign-out-alt text-2xl text-red-600"></i>
            <span
              className={`${
                !openSideBar && "scale-0 "
              }  text-red-600 origin-left duration-300 whitespace-nowrap`}
            >
              Đăng xuất
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
