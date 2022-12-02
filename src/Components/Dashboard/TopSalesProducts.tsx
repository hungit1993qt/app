type Props = {};

const TopSalesProducts = (props: Props) => {
  const data = [
    {
      title: "ASOS Ridley High Waist",
      price: "79.49",
      quantity: "82",
      amount: "6,518.18",
      date: "07/04/2018",
    },
    {
      title: "Marco Light weight Shirt",
      price: "128.50",
      quantity: "37",
      amount: "4,754.50",
      date: "25/05/2018",
    },
    {
      title: "Half Sleeve Shirt",
      price: "39.99",
      quantity: "64",
      amount: "2,559.36",
      date: "17/03/2018",
    },
    {
      title: "Lightweight Jacket",
      price: "20.00",
      quantity: "184",
      amount: "3,680.00",
      date: "12/03/2018",
    },
    {
      title: "Marco Shoes",
      price: "28.49",
      quantity: "69",
      amount: "1,965.81",
      date: "05/04/2018",
    },
    {
      title: "Marco Shoes",
      price: "28.49",
      quantity: "69",
      amount: "1,965.81",
      date: "05/03/2018",
    },
  ];
  return (
    <div className="xl:w-1/2  w-full p-2 ">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            xếp hạng sản phẩm bán chạy
          </span>
          <div className="dark:text-white">
            
            <i className="fa fa-download cursor-pointer ml-2"></i>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="w-full mt-3 ">
            <tbody>
              {data.map((datas, index) => {
                return (
                  <tr
                    key={index}
                    className=" border-b hover:bg-blue-100 dark:hover:bg-gray-600  "
                  >
                    <td className=" text-xs py-4 px-1 whitespace-nowrap dark:text-white  ">
                      <span>{datas.title}</span>
                      <p className=" font-normal pt-2 text-descript-light whitespace-nowrap">
                        {datas.date}
                      </p>
                    </td>
                    <td className="text-sm py-4 px-3 whitespace-nowrap dark:text-white">
                      <span className="">{datas.price}</span>
                      <p className=" font-normal  pt-2 text-descript-light whitespace-nowrap">
                        Giá
                      </p>
                    </td>
                    <td className=" text-sm py-4 px-3 whitespace-nowrap dark:text-white">
                      <span className="">{datas.quantity}</span>
                      <p className=" font-normal pt-2 text-descript-light whitespace-nowrap">
                        Số lượng
                      </p>
                    </td>
                    <td className=" text-sm py-4 px-3 whitespace-nowrap dark:text-white">
                      <span className="">{datas.amount}</span>
                      <p className=" font-normal pt-2 text-descript-light whitespace-nowrap">
                        Thành tiền
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSalesProducts;
