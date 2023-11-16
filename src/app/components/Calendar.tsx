"use client";

import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { mockTrainingData } from "../mockData";
import { generateDates, months } from "../utils/calendar";
import cn from "../utils/cn";

interface DayCellProps {
  date: Dayjs;
  currentMonth: boolean;
  today: boolean;
  onClick: () => void;
}

const DayCell: React.FC<DayCellProps> = ({
  date,
  currentMonth,
  today,
  onClick,
}) => {
  const trainingData = mockTrainingData.filter((training) =>
    dayjs(training.date).isSame(date, "day")
  );

  const cellClasses = cn(
    currentMonth ? "" : "text-gray-400",
    today ? "bg-indigo-600 text-white" : "",
    "h-10 w-10 grid place-content-center rounded-full hover:bg-black transition-all cursor-pointer"
  );

  return (
    <div className="relative h-14 border-t grid place-content-center text-sm">
      <h1 className={cellClasses} onClick={onClick}>
        {date.date()}
        {trainingData.length > 0 && (
          <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 block text-xs text-green-500">
            &#8226;
          </span>
        )}
      </h1>
    </div>
  );
};

const Calendar = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const handleDateClick = (date: Dayjs) => {
    setToday(date);
  };

  return (
    <div className="flex md:w-3/4 w-full mx-auto gap-4 p-4 h-screen items-center text-white">
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <button onClick={() => setToday(today.month(today.month() - 1))}>
              <ChevronLeft />
            </button>
            <button onClick={() => setToday(currentDate)}>Today</button>
            <button onClick={() => setToday(today.month(today.month() + 1))}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-7 text-gray-400">
          {days.map((day, index) => (
            <h1 key={index} className="h-14 grid place-content-center text-sm">
              {day}
            </h1>
          ))}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDates(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => (
              <DayCell
                key={index}
                date={date}
                currentMonth={currentMonth}
                today={today!}
                onClick={() => handleDateClick(date)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
