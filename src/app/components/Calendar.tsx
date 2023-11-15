"use client";

import dayjs from "dayjs";
import { useState } from "react";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { generateDates, months } from "../utils/calendar";
import cn from "../utils/cn";

const Calendar = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <div className="flex flex-col lg:flex-row lg:w-3/4 w-full mx-auto divide-x-2 gap-4 p-4 h-screen items-center text-white">
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </button>
            <button
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-7 text-gray-400">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 grid place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDates(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="h-14 border-t grid place-content-center text-sm"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-indigo-600 text-white" : "",
                      selectedDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 grid place-content-center rounded-full hover:bg-black transition-all cursor-pointer"
                    )}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 w-full px-4">
        <h1 className="font-semibold">
          Workouts for {selectedDate.toDate().toDateString()}
        </h1>
        <p>No workouts for today</p>
      </div>
    </div>
  );
};

export default Calendar;
