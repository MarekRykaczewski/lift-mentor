"use client";

import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { mockTrainingData } from "../mockData";
import { generateDates, months } from "../utils/calendar";
import cn from "../utils/cn";
import Modal from "./Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trainingData = mockTrainingData.filter((training) =>
    dayjs(training.date).isSame(date, "day")
  );

  const handleCellClick = () => {
    if (trainingData.length > 0) {
      setIsModalOpen(true);
    }
  };

  const cellClasses = cn(
    currentMonth ? "" : "text-gray-400",
    today ? "bg-indigo-600 text-white" : "",
    "h-10 w-10 grid place-content-center rounded-full hover:bg-black transition-all cursor-pointer"
  );

  return (
    <>
      <div
        onClick={handleCellClick}
        className="relative h-14 border-t grid place-content-center text-sm"
      >
        <h1 className={cellClasses} onClick={onClick}>
          {date.date()}
          {trainingData.length > 0 && (
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 block text-xs text-green-500">
              &#8226;
            </span>
          )}
        </h1>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-white bg-mainDark p-8 w-[calc(100vw-10rem)] h-[calc(100vh-10rem)]">
          <h1 className="font-semibold text-xl py-2 mb-2 text-center border-b-2 border-indigo-600">
            {date.toDate().toDateString()}
          </h1>
          {trainingData.length > 0 ? (
            trainingData.map((training, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold border-b-2 border-indigo-600 w-fit">
                  {training.exercise}
                </h2>
                {Array.from({ length: training.sets }, (_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex justify-between hover:bg-gray-600 hover:bg-opacity-60 cursor-pointer"
                  >
                    <div className="w-1/3"> {/** Empty column */}</div>
                    <div className="w-1/3">
                      {training.weight}{" "}
                      <span className="text-sm text-gray-400">lbs</span>
                    </div>
                    <div className="w-1/3">
                      {training.reps}{" "}
                      <span className="text-sm text-gray-400">reps</span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No workouts for today</p>
          )}
        </div>
      </Modal>
    </>
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
