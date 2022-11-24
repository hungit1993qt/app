import React, { useEffect } from "react";
import { setSideBar, setSideBarMobile } from "Slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
type Props = {};

const Sidebar = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { openSideBar, hiddenSideBar } = useSelector(
    (state: RootState) => state.auth
  );
  const handleResize = () => {
    if (window.innerWidth < 720) {
      dispatch(setSideBarMobile(true));
    } else {
      dispatch(setSideBarMobile(false));
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const menu = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: false },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: false},
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div
      className={`${
        openSideBar ? "w-60" : "w-24"
      } duration-300 h-screen bg-dark relative pt-8 p-5 ${
        hiddenSideBar ? "hidden" : "block"
      }`}
    >
      <i
        className={`${
          openSideBar ? "fa fa-angle-left" : "fa fa-angle-right"
        } absolute cursor-pointer bg-white text-base -right-3 top-5 w-7 border-2 border-dark-purple text-center rounded-full`}
        onClick={() => dispatch(setSideBar())}
      ></i>
      <div className="flex gap-x-4 items-center">
        <i
          className={`fa fa-cog text-5xl text-white duration-500 ${
            !openSideBar && "rotate-[360deg]"
          }`}
        ></i>
        <h1
          className={`text-white origin-left font-medium text-3xl duration-300 ${
            !openSideBar && "scale-0"
          }`}
        >
          Admin
        </h1>
      </div>
      <ul className="pt-6">
        {menu.map((menu, index: number) => {
          return (
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 -ml-1  hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
              key={index}
            >
              <img src={`./icon-menu/${menu.src}.png`}></img>
              <span
                className={`${
                  !openSideBar && "scale-0 "
                } origin-left duration-300 }`}
              >
                {menu.title}
              </span>
            </li>
          );
        })}
        <li
          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 -ml-1  hover:bg-light-white rounded-md 
               `}
        >
          <i className="fa fa-sign-out-alt text-2xl text-red-600"></i>
          <span
            className={`${
              !openSideBar && "scale-0 "
            }  text-red-600 origin-left duration-300`}
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
