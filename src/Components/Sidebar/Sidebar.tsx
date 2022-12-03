import React, { useEffect, useRef } from "react";
import { setSideBar, setSideBarMobile } from "Slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useOnClickOutside } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
type Props = {};

const Sidebar = (props: Props) => {
  const refSiderBar = useRef(null);
  const navigate = useNavigate();
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
    { title: "Tổng Quan", url: "/", src: "Chart_fill" },
    { title: "Tin Nhắn", url: "tin-nhan", src: "Chat" },
    { title: "Tài Khoản", url: "tai-khoan", src: "User", gap: false },
    { title: "Lịch Họp", url: "lich-hop", src: "Calendar" },
    { title: "Tìm Kiếm", url: "tim-kiem", src: "Search" },
    { title: "Phân Tích", url: "phan-tich", src: "Chart" },
    { title: "Quản Lý File ", url: "quan-ly-file", src: "Folder", gap: false },
    { title: "Cài Đặt", url: "cai-dat", src: "Setting" },
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
        } fa fa-angle-right hidden lg:block absolute cursor-pointer bg-white text-base -right-3 top-4 w-7 border-2 border-dark-purple text-center rounded-full`}
        onClick={() => dispatch(setSideBar(!openSideBar))}
      ></i>

      <div className="flex gap-x-4 items-center pb-3 ">
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
                onClick={() => navigate(menu.url)}
                className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-light-white rounded-md ${
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
                <span
                  className={`${
                    openSideBar && "hidden"
                  } absolute left-48 font-bold drop-shadow-lg border-0 text-sm p-0 w-0 rounded-md flex whitespace-pre dark:text-gray-300 text-gray-300 dark:bg-drop-modal-dark bg-drop-modal-dark dark:border-boder-drop-modal-dark border-solid overflow-hidden group-hover:duration-300 group-hover:p-3 group-hover:border group-hover:left-24 group-hover:w-fit`}
                >
                  {menu.title}
                </span>
              </li>
            );
          })}
          <li
            className={`group text-gray-300 text-sm flex items-center gap-x-4 mb-8 cursor-pointer px-4 py-3 hover:bg-light-white rounded-md 
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
            <span
              className={`${
                openSideBar && "hidden"
              } absolute left-48 font-bold drop-shadow-lg  border-0 text-gray-600 text-sm p-0 w-0 rounded-md flex whitespace-pre bg-drop-modal-dark dark:bg-drop-modal-dark dark:border-boder-drop-modal-dark border-solid overflow-hidden group-hover:duration-300 group-hover:p-3 group-hover:border group-hover:left-24 group-hover:w-fit group-hover:text-red-500`}
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
