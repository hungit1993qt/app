import Calendar from "Components/Dashboard/Calendar";
import TopSaler from "Components/Dashboard/TopSaler";
import TopSales from "Components/Dashboard/TopSales";
import TopSalesProducts from "Components/Dashboard/TopSalesProducts";
import TotalSales from "Components/Dashboard/TotalSales";
import { RootState } from "configStore";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`${openSideBar ? "lg:ml-60" : "lg:ml-24"} duration-300 bg-content-light dark:bg-content-dark   
       `}
    >
      <h1 className="mt-20 mb-4 px-8 font-bold text-text-number text-2xl capitalize">quản lý</h1>
      <div className="font-semibold text-text-number flex content-start  px-5 box-border flex-wrap xl:flex-nowrap bg-content-light dark:bg-content-dark ">
      
        <TopSales />
        <TopSaler />
        <TopSalesProducts />
      </div>
      <div className="font-semibold text-text-number flex content-start px-5 box-border flex-wrap xl:flex-nowrap bg-content-light dark:bg-content-dark ">
        <Calendar />
      </div>
      <div className="font-semibold text-text-number flex content-start px-5 box-border flex-wrap xl:flex-nowrap bg-content-light dark:bg-content-dark ">
        <TotalSales />
      </div>
    </div>
  );
};

export default HomePage;
