import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
type Props = {};

const Option = (props: Props) => {
  const data = [
    {
      title: "Sửa",
      icon: "fa fa-pencil-alt",
      url: "",
    },
    {
      title: "Xóa",
      icon: "fa fa-trash",
      url: "",
    },
    {
      title: "Thêm người",
      icon: "fa fa-plus-circle",
      url: "",
    },
    {
      title: "Thoát",
      icon: "fa fa-sign-out-alt",
      url: "",
    },
  ];
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Menu as="div" className="relative opacity-1 ">
        <div>
          <Menu.Button className="flex items-center rounded-full text-gray-500 dark:text-white outline-none">
            {/* <span className="sr-only">Open options</span> */}
            <i className="fa fa-ellipsis-v"></i>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="outline-none absolute right-2 z-10 top-4 bg-white dark:text-white dark:bg-drop-modal-dark dark:border-boder-drop-modal-dark border rounded-md w-36 overflow-hidden">
            <div className="py-0">
              {data.map((data,index) => {
                return (
                  <Menu.Item>
                    {({ active }: any) => (
                      <a
                        href="#"
                        key={index}
                        className={classNames(
                          active
                            ? " text-gray-500"
                            : " text-descript-light dark:text-descript-light",
                          "block px-4 py-2 text-sm dark:text-white dark:hover:bg-gray-600"
                        )}
                      >
                        <i className={`${data.icon} mr-3`}></i>{data.title}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Option;
