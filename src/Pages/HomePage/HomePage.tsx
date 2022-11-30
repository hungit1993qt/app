import TopSales from "Components/Dashboard/TopSales";
import TopSalesProducts from "Components/Dashboard/TopSalesProducts";
import { RootState } from "configStore";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`${openSideBar ? "lg:ml-60" : "lg:ml-24"} duration-300     
       font-semibold  text-text-number flex content-start gap-5 p-5 box-border flex-wrap lg:flex-nowrap bg-border-color  mt-14`}
    >
      <TopSales />
      <TopSalesProducts />
    </div>
  );
};

export default HomePage;
