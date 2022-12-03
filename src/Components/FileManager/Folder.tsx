import Option from "./Option";
type Props = {};

const Folder = (props: Props) => {
  const data = [
    {
      title: "File",
      icon: "fa fa-folder",
      url: "",
    },
    {
      title: "Google Drive",
      icon: "fab fa-google-drive",
      url: "",
    },
    {
      title: "Dropbox",
      icon: "fab fa-dropbox",
      url: "",
    },
    {
      title: "Chia sẻ",
      icon: "fa fa-share-alt",
      url: "",
    },
    {
      title: "Truy cập gần đây",
      icon: "fa fa-clock",
      url: "",
    },
    {
      title: "Ưu tiên",
      icon: "fa fa-star",
      url: "",
    },
    {
      title: "File đã xóa",
      icon: "fa fa-prescription-bottle-alt",
      url: "",
    },
  ];

  return (
    <div className="xl:w-72 w-full py-2 pl-2 pr-1 ">
      <div className="shadow box-border border px-4 py-2 bg-box dark:bg-dark h-full flex flex-col items-center">
        <div className="flex justify-center w-full ">
          <span className="w-4/5 capitalize whitespace-nowrap font-medium rounded-sm shadow-md text-white bg-purple py-2 text-center text-xs mt-2">
            <i className="fa fa-plus mr-1"></i>Tạo mới folder
          </span>
          {/* <i className="fa fa-ellipsis-v cursor-pointer dark:text-white"></i> */}
        </div>
        <div className="z-0 mt-8 text-xs dark:text-white w-4/5">
          <ul>
            {data.map((data, index) => {
              return (
                <li className="text-base font-normal mb-6 whitespace-nowrap">
                  <i className={`${data.icon} mr-4`}></i>
                  {data.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Folder;
