import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import {  setSideBarMobile } from "Slices/auth";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useDarkModes from "Hook/useDarkMode";

//tsrafce
type Props = {};
const data = [
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
  {
    src: "./img/avatar/hung.jpg",
    title: "ASOS Ridley High Waist Marco Light weight Shirt Half Sleeve Shirt",
  },
];
const TopMenu = (props: Props) => {
  const { isDarkModes, toggleDarkModes } = useDarkModes();

  const [dropMenu, setDropMenu] = useState(false);
  const [dropBell, setDropBell] = useState(false);
  const refMenu = useRef(null);
  const refBell = useRef(null);
  const handleClickOutsideMenu = () => {
    setDropMenu(false);
  };
  const handleClickInsideMenu = () => {
    setDropMenu(!dropMenu);
  };
  const handleClickOutsideBell = () => {
    setDropBell(false);
  };

  const handleClickInsideBell = () => {
    setDropBell(!dropBell);
  };
  useOnClickOutside(refMenu, handleClickOutsideMenu);
  useOnClickOutside(refBell, handleClickOutsideBell); //
  const dispatch = useDispatch<AppDispatch>();
  const {  openSideBar, openSideMobile } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <div
      className={` ${
        openSideBar ? "lg:left-60" : "lg:left-24 "
      } duration-300 lg:right-0 z-10 bg-white dark:bg-dark flex items-center justify-between lg:justify-between box-border lg:px-10 px-6 text-text-number fixed w-full lg:w-auto `}
    >
      <i
        className={`fa fa-align-justify lg:hidden block cursor-pointer z-0 ml-0 text-lg text-gray-500 dark:text-white
          `}
        onClick={() => dispatch(setSideBarMobile(!openSideMobile))}
      ></i>
      <form className="hidden lg:block">
        <div className="flex items-center relative">
          <input
            className="p-2 pl-8 rounded-l-lg bg-content-light dark:bg-content-dark border"
            placeholder="Tìm kiếm..."
            type="text"
          />
          <i className="fa fa-search absolute top-3 left-2 text-gray-300"></i>
          <button className=" bg-purple text-gray-50 rounded-r-lg p-2.5 text-md font-semibold">
            Tìm kiếm
          </button>
        </div>
      </form>
      <div className="flex items-center lg:gap-x-14 gap-x-6 sm:gap-x-10">
        <i className="fa fa-search text-gray-500 dark:text-white font-bold text-3xl lg:hidden block cursor-pointer"></i>
        <i
          className={`fa ${
            isDarkModes ? "fa-sun text-yellow-400" : "fa-moon"
          } text-3xl cursor-pointer`}
          onClick={() => {
            toggleDarkModes(isDarkModes);
          }}
        ></i>
        <div
          className=" relative"
          onClick={handleClickInsideBell}
          ref={refBell}
        >
          <i className="fa fa-bell text-gray-500 dark:text-white text-3xl cursor-pointer"></i>

          <div
            className={`bg-white dark:bg-drop-modal-dark dark:text-white  w-80 shadow-lg absolute top-11 right-1/2 translate-x-1/2 lg:right-0 px-1 duration-300 border-colorBorder dark:border-boder-drop-modal-dark border border-solid ${
              dropBell ? "scale-1 translate-y-1" : "scale-0 -translate-y-5"
            } `}
          >
            <div className="flex justify-between font-semibold px-6 py-3 ">
              <span>Thông báo</span>
              <span>Xóa tất cả</span>
            </div>
            <div className="overflow-auto w-full h-60">
              <table className="relative w-full ">
                <tbody>
                  {data.map((datas, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-md dark:text-descript-light cursor-pointer rounded dark:hover:bg-gray-500 hover:bg-blue-100 px-5 py-2  flex items-center">
                          <img
                            src={`${datas.src}`}
                            alt=""
                            className="mr-2 w-8"
                          />
                          <span className="text-sm">{datas.title}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center font-semibold px-6 py-3 ">
              <span>Hiễn thị thêm...</span>
            </div>
          </div>
        </div>

        <div
          className=" relative dark:bg-dark lg:bg-content-light p-2"
          onClick={handleClickInsideMenu}
          ref={refMenu}
        >
          <div className="flex items-center cursor-pointer">
            <img
              src="./img/avatar/hung.jpg"
              alt=""
              className=" rounded-full w-10 h-10 object-contain mr-2 border-gray-600 border-2"
            />
            <div className="flex flex-col items-center leading-4 ">
              <span className="text-purple dark:text-white font-medium">
                Mr.Hung
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                Admin
              </span>
            </div>
          </div>
          <div
            className={`bg-white  dark:text-white shadow-lg absolute right-0 lg:right-0 top-14 mt-0 duration-300 border-colorBorder rounded-md dark:bg-drop-modal-dark dark:border-boder-drop-modal-dark border-solid ${
              dropMenu ? "scale-1 translate-y-1" : "scale-0 -translate-y-5"
            } `}
          >
            <h1 className="text-md pl-6  py-3 whitespace-nowrap dark:text-descript-light">Xin chào!</h1>
            <ul className="">
              <li className="text-sm cursor-pointer hover:bg-blue-100 mt-0 dark:hover:bg-gray-500 pl-8 pr-14 py-2 whitespace-nowrap dark:text-descript-light">
                <i className="fa fa-user-circle mr-2"></i>Tài khoản
              </li>
              <li className=" text-sm cursor-pointer  hover:bg-blue-100 mt-2 dark:hover:bg-gray-500 pl-8 pr-14 py-2 whitespace-nowrap dark:text-descript-light">
                <i className="fa fa-tablet-alt mr-2"></i>Ứng dụng
              </li>
              <li className=" text-sm cursor-pointer  hover:bg-blue-100 mt-2 dark:hover:bg-gray-500 pl-8 pr-14 py-2 whitespace-nowrap dark:text-descript-light">
                <i className="fa fa-cog mr-2"></i> Cài đặt
              </li>
              <li className=" text-sm cursor-pointer  hover:bg-blue-100 mt-2 dark:hover:bg-gray-500 pl-8 pr-14 py-2 whitespace-nowrap dark:text-descript-light">
                <i className="fa fa-sign-out-alt mr-2"></i>Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
