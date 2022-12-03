import Option from "./Option";
type Props = {};

const Folder = (props: Props) => {
  const data = [
    {
      name: "Phương",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Nguyễn",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Hùng",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="lg:w-1/4 w-full py-2 pl-2 pr-1 ">
      <div className="shadow box-border border px-4 py-2 bg-box dark:bg-dark h-full flex flex-col items-center">
        <div className="flex justify-center w-full ">
          <span className="w-4/5 capitalize whitespace-nowrap font-medium rounded-sm shadow-md text-white bg-purple py-2 text-center text-xs mt-2">
            <i className="fa fa-plus mr-1"></i>Tạo mới folder
          </span>
          {/* <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i> */}
        </div>
        <div className="h-60 z-0 mt-8 text-xs dark:text-white"></div>
      </div>
    </div>
  );
};

export default Folder;
