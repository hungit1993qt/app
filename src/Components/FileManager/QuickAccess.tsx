import Option from "./Option";
type Props = {};

const QuickAccess = (props: Props) => {
  const data = [
    {
      title: "Hyper-sketch.zip",
      size: "2.3 MB",
      icon: "fa fa-folder",
    },
    {
      title: "Compile Version",
      size: "87.2 MB",
      icon: "fa fa-folder-minus",
    },
    {
      title: "admin.zip",
      size: "45.1 MB",
      icon: "fa fa-folder-open",
    },
    {
      title: "Docs.pdf",
      size: "7.5 MB",
      icon: "fa fa-folder",
    },

    {
      title: "License-details.pdf",
      size: "0.3 MB",
      icon: "fa fa-folder-open",
    },
    {
      title: "Purchase Verification",
      size: "2.2 MB",
      icon: "fa fa-folder",
    },
    {
      title: "Hyper Integrations",
      size: "0.8 MB",
      icon: "fa fa-folder-open",
    },
  ];
  return (
    <div className="w-full py-2 pl-1 pr-1">
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm">
            truy cập nhanh
          </span>
          {/* <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i> */}
          <Option />
        </div>
        <div className="z-0 mt-4 flex flex-row flex-wrap">
          {data.map((data, index) => {
            return (
              <div key={index} className="p-1 w-full xl:w-1/2 2xl:w-1/4">
                <div className="flex flex-row items-center p-2 gap-x-2 border ">
                  <i className={`${data.icon} p-2 rounded-sm dark:text-blue-400 bg-blue-100`}></i>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-descript-light whitespace-nowrap">{data.title}</span>
                    <span className="text-xs whitespace-nowrap dark:text-descript-light">{data.size}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
