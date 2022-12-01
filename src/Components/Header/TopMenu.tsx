import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { setDarkModes, setSideBarMobile } from "Slices/auth";
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
  console.log(isDarkModes);
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
  const { darkMode, openSideBar, openSideMobile } = useSelector(
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
            placeholder="Search..."
            type="text"
          />
          <i className="fa fa-search absolute top-3 left-2 text-gray-300"></i>
          <button className=" bg-purple text-gray-50 rounded-r-lg p-2">
            Search
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
            className={`bg-box  w-80 shadow-lg absolute top-11 right-1/2 translate-x-1/2 lg:right-0 px-1 duration-300 border-colorBorder border border-solid ${
              dropBell ? "scale-1 translate-y-1" : "scale-0 -translate-y-5"
            } `}
          >
            <div className="flex justify-between font-semibold px-6 py-3 bg-white">
              <span>Notification</span>
              <span>Clear all</span>
            </div>
            <div className="overflow-auto w-full h-60">
              <table className="relative w-full ">
                <tbody>
                  {data.map((datas, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-md cursor-pointer rounded hover:bg-blue-100 px-5 py-2 bg-white flex items-center">
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

            <div className="flex justify-center font-semibold px-6 py-3 bg-white">
              <span>Show more...</span>
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
            className={`bg-white w-32 shadow-lg absolute right-0 lg:right-0 p-3 top-14 -mt-1 duration-300 border-colorBorder border border-solid ${
              dropMenu ? "scale-1 translate-y-1" : "scale-0 -translate-y-5"
            } `}
          >
            <ul className="">
              <li className=" text-md cursor-pointer rounded hover:bg-blue-100 mt-0">
                Profile
              </li>
              <li className=" text-md cursor-pointer rounded hover:bg-blue-100 mt-2">
                Your apps
              </li>
              <li className=" text-md cursor-pointer rounded hover:bg-blue-100 mt-2">
                Settings
              </li>
              <li className=" text-md cursor-pointer rounded hover:bg-blue-100 mt-2">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
