import Done from "Components/CalendarToDo/Done";
import InProgress from "Components/CalendarToDo/InProgress";
import Review from "Components/CalendarToDo/Review";
import Todo from "Components/CalendarToDo/Todo";
import Calendar from "Components/Dashboard/Calendar";
import { RootState } from "configStore";
import { useSelector } from "react-redux";

const CalendarToDo = () => {
  const { openSideBar } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`${
        openSideBar ? "lg:ml-60" : "lg:ml-24"
      } duration-300 bg-content-light dark:bg-content-dark   
       `}
    >
      <h1 className="mt-20 mb-4 px-8 font-bold text-text-number text-2xl capitalize dark:text-white">
        lịch tiến độ
      </h1>
      <div className="font-semibold text-text-number flex content-start  px-5 box-border flex-wrap xl:flex-nowrap bg-content-light dark:bg-content-dark ">
        <Calendar />
      </div>
      <div className="font-semibold text-text-number flex content-start  px-5 box-border flex-wrap bg-content-light dark:bg-content-dark ">
        <Todo />
        <InProgress />
        <Review />
        <Done />
      </div>
    </div>
  );
};

export default CalendarToDo;
