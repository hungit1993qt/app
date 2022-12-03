import Folder from "Components/FileManager/Folder";
import QuickAccess from "Components/FileManager/QuickAccess";
import Recent from "Components/FileManager/Recent";
import { RootState } from "configStore";
import { useSelector } from "react-redux";

const FileManager = () => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`${
        openSideBar ? "lg:ml-60" : "lg:ml-24"
      } duration-300 bg-content-light dark:bg-content-dark   
       `}
    >
      <h1 className="mt-20 mb-4 px-8 font-bold text-text-number text-2xl capitalize">
        quản lý file
      </h1>
      <div className="font-semibold text-text-number flex content-start px-5 box-border flex-wrap xl:flex-nowrap bg-content-light dark:bg-content-dark ">
        <Folder />
        <div className="flex flex-col lg:w-3/4 w-full">
          <QuickAccess />
          <Recent />
        </div>
      </div>
    </div>
  );
};

export default FileManager;
