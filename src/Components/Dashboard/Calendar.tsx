import { Menu, Transition } from "@headlessui/react";
// import { DotsVerticalIcon } from "@heroicons/react/outline";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Nguyễn Trần Hùng",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-02T13:00",
    endDatetime: "2022-12-02T14:30",
  },
  {
    id: 2,
    name: "Nguyễn Đình Hoàng",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-02T14:30",
    endDatetime: "2022-12-02T16:30",
  },
  {
    id: 3,
    name: "Ngô Thị Quỳnh",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-02T16:45",
    endDatetime: "2022-12-02T18:45",
  },
  {
    id: 4,
    name: "Nguyễn Hoàng Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-02T08:00",
    endDatetime: "2022-12-02T10:00",
  },
  {
    id: 5,
    name: "Văn Như Ái",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-02T10:45",
    endDatetime: "2022-12-02T12:45",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className=" w-full p-2 ">
      {/* <h1 className=" uppercase font-bold text-xl m-2">calendar</h1> */}
      <div className="shadow box-border border p-4 bg-box dark:bg-dark h-full">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto uppercase font-bold dark:text-white text-xl">
                tháng {format(firstDayCurrentMonth, "MM/yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>

                <i className="fa fa-arrow-left w-5 h-5"></i>
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>

                <i className="fa fa-arrow-right w-5 h-5"></i>
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center dark:text-white text-gray-500 ">
              <div>T2</div>
              <div>T3</div>
              <div>T4</div>
              <div>T5</div>
              <div>T6</div>
              <div>T7</div>
              <div>CN</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm ">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={
                      "" +
                      classNames(
                        isEqual(day, selectedDay) && "text-white",
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-white bg-red-500 dark:bg-green-500",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-descript-light dark:text-descript-light",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-white",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-red-500 dark:bg-green-500 text-white",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-gray-900 text-white",
                        !isEqual(day, selectedDay) && "hover:bg-gray-200",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full dark:text-white"
                      )
                    }
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="uppercase font-bold dark:text-white text-md">
              Lịch họp{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "dd/MM/yyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p className="dark:text-descript-light">
                  Không có lịch hẹn hôm nay.
                </p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }: any) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group border rounded-xl dark:hover:bg-gray-600 hover:bg-blue-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-600 dark:text-white">{meeting.name}</p>
        <p className="mt-0.5 dark:text-descript-light">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu as="div" className="relative opacity-1 ">
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 dark:text-white">
            <span className="sr-only">Open options</span>

            <i className="fa fa-ellipsis-v w-6 h-6"></i>
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
          <Menu.Items className="absolute right-2 z-10 top-4 bg-white dark:text-white dark:bg-drop-modal-dark dark:border-boder-drop-modal-dark rounded-md shadow-lg w-36 border">
            <div className="py-0">
              <Menu.Item>
                {({ active }: any) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? " text-gray-500"
                        : " text-descript-light dark:text-descript-light",
                      "block px-4 py-2 text-sm dark:text-white dark:hover:bg-gray-600"
                    )}
                  >
                    Sửa lịch
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: any) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? " text-gray-500" : "text-descript-light dark:text-descript-light",
                      "block px-4 py-2 text-sm dark:text-white dark:hover:bg-gray-600"
                    )}
                  >
                    Xóa lịch
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
