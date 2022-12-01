//tsrfce
import Sidebar from "Components/Sidebar/Sidebar";
import TopMenu from "Components/Header/TopMenu";
import { Outlet } from "react-router-dom";

function HomeTemplate() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex w-full h-screen dark:bg-content-dark bg-content-light flex-col">
        <TopMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default HomeTemplate;
