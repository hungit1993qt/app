import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "Slices/auth";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
//tsrafce
type Props = {};

const TopMenu = (props: Props) => {
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
  const { darkMode } = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full h-16 bg-light-white flex items-center justify-end lg:justify-between pl-10 pr-10">
      <form className="hidden lg:block">
        <div className="flex items-center relative">
          <input
            className="p-2 pl-8 rounded-l-lg"
            placeholder="Search..."
            type="text"
          />
          <i className="fa fa-search absolute top-3 left-2 text-gray-300"></i>
          <button className=" bg-purple text-gray-50 rounded-r-lg p-2">
            Search
          </button>
        </div>
      </form>

      <div className="flex items-center gap-x-14">
        <i
          className={`fa ${
            darkMode ? "fa-sun text-yellow-400" : "fa-moon"
          } text-3xl cursor-pointer`}
          onClick={() => dispatch(setDarkMode())}
        ></i>
        <div
          className=" relative"
          onClick={handleClickInsideBell}
          ref={refBell}
        >
          <i className="fa fa-bell text-gray-500 text-3xl cursor-pointer"></i>
          <div
            className={`bg-slate-50 w-36 shadow-lg absolute top-12 -right-1 p-3 duration-300 border-colorBorder border border-solid ${
              dropBell ? "scale-1 translate-y-1" : "scale-0 -translate-y-5"
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

        <div
          className=" relative"
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
              <span className="text-purple font-medium">Mr.Hung</span>
              <span className="text-xs text-gray-600 font-semibold">Admin</span>
            </div>
          </div>
          <div
            className={`bg-slate-50 w-36 shadow-lg absolute top-12 p-3 duration-300 border-colorBorder border border-solid ${
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
