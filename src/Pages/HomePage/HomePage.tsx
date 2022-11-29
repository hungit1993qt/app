import TopSales from "Components/Dashboard/TopSales";
import TopSalesProducts from "Components/Dashboard/TopSalesProducts";
import { RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const HomePage = (props: Props) => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`
      
       font-semibold overflow-hidden text-text-number flex content-start flex-wrap lg:flex-nowrap bg-content p-2`}
    >
      <TopSales />
      <TopSalesProducts />
    </div>
  );
};

export default HomePage;
