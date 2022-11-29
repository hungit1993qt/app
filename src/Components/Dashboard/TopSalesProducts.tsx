type Props = {};

const TopSalesProducts = (props: Props) => {
  return (
    <div className=" bg-box  lg:w-2/3 w-full m-4 p-6 shadow border ">
      <div className="flex justify-between items-center ">
        <span className="uppercase">total sales</span>
        <i className="fa fa-ellipsis-v"></i>
      </div>
    </div>
  );
};

export default TopSalesProducts;
