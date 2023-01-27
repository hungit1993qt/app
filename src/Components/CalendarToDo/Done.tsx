import React from "react";
import Option from "./Option";

type Props = {};

const Done = (props: Props) => {
  const data = [
    {
      title: "iOS App home page",
      tag: "iOS",
      Creator: {
        name: "Nguyễn Trần Hùng",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      },
      comment: "75",
      Priority: "Thấp",
      dateCreated: "5/12/2022",
    },
    {
      title: "Topnav layout design",
      tag: "Hyper",
      Creator: {
        name: "Nguyễn Văn Khải",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      },
      comment: "20",
      Priority: "Bình thường",
      dateCreated: "2/12/2022",
    },
    {
      title: "Invite user to a project",
      tag: "CRM",
      Creator: {
        name: "Hoàng Như Quỳnh",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      },
      comment: "35",
      Priority: "Cao",
      dateCreated: "7/12/2022",
    },
    {
        title: "Invite user to a project",
        tag: "CRM",
        Creator: {
          name: "Hoàng Như Quỳnh",
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        },
        comment: "35",
        Priority: "Thấp",
        dateCreated: "7/12/2022",
      },
  ];
  return (
    <div className="xl:w-1/2 w-full p-2 2xl:w-1/4">
      <div className="shadow box-border border px-4 py-2  h-full">
        <div className="flex justify-between items-center ">
          <span className="uppercase font-bold dark:text-white text-sm mt-2">
            Hoàn Thành ({data.length})
          </span>
        </div>
        <div className="z-0 mt-8 text-xs dark:text-white">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="mt-5 flex flex-col gap-y-2 bg-box dark:bg-dark p-4 rounded-sm shadow-md dark:shadow-sm"
              >
                <div className="flex flex-row items-center justify-between ">
                  <span
                    className={`text-xs p-1  text-white rounded-lg ${
                      data.Priority === "Cao" && "bg-red-500"
                    } ${data.Priority === "Bình thường" && "bg-gray-500"} ${
                      data.Priority === "Thấp" && "bg-green-500"
                    }`}
                  >
                    {data.Priority}
                  </span>
                  <Option />
                </div>
                <span className="text-lg">{data.title}</span>
                <div className="text-descript-light">
                  <span className="mr-5">
                    <i className="fa fa-suitcase  mr-1"></i>
                    {data.tag}
                  </span>
                  <span>
                    <i className="fa fa-comment-dots mr-1"></i>
                    {data.comment} Bình luận
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6 rounded-full mr-2"
                      src={data.Creator.avatar}
                      alt=""
                    />
                    {data.Creator.name}
                  </div>

                  <span className="font-light text-descript-light">
                    {data.dateCreated}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Done;
