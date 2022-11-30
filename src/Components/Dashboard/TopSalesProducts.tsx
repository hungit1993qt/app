type Props = {};

const TopSalesProducts = (props: Props) => {
  const data = [
    {
      title: "ASOS Ridley High Waist",
      price: "79.49",
      quantity: "82",
      amount: "6,518.18",
      date: "07 April 2018",
    },
    {
      title: "Marco Light weight Shirt",
      price: "128.50",
      quantity: "37",
      amount: "4,754.50",
      date: "25 March 2018",
    },
    {
      title: "Half Sleeve Shirt",
      price: "39.99",
      quantity: "64",
      amount: "2,559.36",
      date: "17 March 2018",
    },
    {
      title: "Lightweight Jacket",
      price: "20.00",
      quantity: "184",
      amount: "3,680.00",
      date: "12 March 2018",
    },
    {
      title: "Marco Shoes",
      price: "28.49",
      quantity: "69",
      amount: "1,965.81",
      date: "05 March 2018",
    },
  ];
  return (
    <div className=" bg-box  lg:w-2/3 w-full p-6 shadow border ">
      <div className="flex justify-between items-center ">
        <span className="uppercase font-bold">total sales</span>
        <i className="fa fa-download cursor-pointer"></i>
      </div>
      <div className="overflow-auto">
        <table className="w-full mt-2">
          <tbody>
            {data.map((datas, index) => {
              return (
                <tr key={index} className=" border-b hover:bg-blue-100 ">
                  <td className=" text-sm py-5 px-1 whitespace-nowrap ">
                    <span>{datas.title}</span>
                    <p className=" font-normal text-xs pt-2">{datas.date}</p>
                  </td>
                  <td className="text-sm py-5 px-3">
                    <span className="">${datas.price}</span>
                    <p className=" font-normal text-xs pt-2">Price</p>
                  </td>
                  <td className=" text-sm py-5 px-3">
                    <span className="">{datas.quantity}</span>
                    <p className=" font-normal text-xs pt-2">Quantity</p>
                  </td>
                  <td className=" text-sm py-5 px-3">
                    <span className="">${datas.amount}</span>
                    <p className=" font-normal text-xs pt-2">Amount</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSalesProducts;
