//tsrfce
import Sidebar from "Components/Sidebar/Sidebar";
import TopMenu from "Components/Header/TopMenu";
import { Outlet } from "react-router-dom";

type Props = {};

function HomeTemplate({}: Props) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex w-full h-screen bg-gray-200 flex-col">
        <TopMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default HomeTemplate;
