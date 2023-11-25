"use client";

import { useEffect, useState } from "react";
import TrainingChart from "../components/TrainingChart";
import { mockTrainingData } from "../mockData";

const page = () => {
  const [filteredData, setFilteredData] = useState(mockTrainingData);
  const [timeRange, setTimeRange] = useState("all");

  const [selectedFilter, setSelectedFilter] = useState("exercise");
  const [selectedCategory, setSelectedCategory] = useState("all"); // Initialize with "all"
  const [selectedExercise, setSelectedExercise] = useState("all"); // Initialize with "all"

  const timeRanges = ["1m", "3m", "6m", "1y", "all"];

  const timeRangeButtons = timeRanges.map((range) => (
    <button
      key={range}
      className="bg-indigo-600 hover:bg-indigo-400 py-1 px-4 text-black rounded-2xl"
      onClick={() => setTimeRange(range)}
    >
      {range}
    </button>
  ));

  useEffect(() => {
    filterDataByTimeRange(timeRange);
  }, [timeRange]);

  const handleFilterChange = (filterBy) => {
    const filtered =
      filterBy === "exercise"
        ? mockTrainingData.filter(
            (item) =>
              item.exercise === selectedExercise || selectedExercise === "all"
          )
        : filterBy === "muscle"
        ? mockTrainingData.filter(
            (item) =>
              item.muscle === selectedCategory || selectedCategory === "all"
          )
        : mockTrainingData;

    setFilteredData(filtered);
  };

  const filterDataByTimeRange = (range) => {
    const currentDate = new Date();
    let startDate;

    switch (range) {
      case "1m":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );
        break;
      case "3m":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 3,
          1
        );
        break;
      case "6m":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 6,
          1
        );
        break;
      case "1y":
        startDate = new Date(
          currentDate.getFullYear() - 1,
          currentDate.getMonth(),
          1
        );
        break;
      case "all":
        startDate = new Date(0); // Epoch
        break;
      default:
        startDate = new Date(0);
        break;
    }

    const filtered = mockTrainingData.filter((item) => item.date >= startDate);
    setFilteredData(filtered);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-full p-6">
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex gap-2">
            <label
              className="text-white uppercase font-bold"
              htmlFor="filterSelect"
            >
              Filter:
            </label>
            <select
              id="filterSelect"
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                handleFilterChange(e.target.value);
              }}
              className="bg-mainDark text-white border-b-2"
            >
              <option value="exercise">Exercise</option>
              <option value="muscle">Muscle</option>
            </select>
            <div>
              <select
                id="specificFilterSelect"
                onChange={(e) => {
                  if (selectedFilter === "exercise") {
                    setSelectedExercise(e.target.value);
                  } else if (selectedFilter === "muscle") {
                    setSelectedCategory(e.target.value);
                  }
                }}
                className="bg-mainDark text-white border-b-2"
              >
                <option value="all">All</option>
                {/* Add options dynamically based on selectedFilter */}
                {selectedFilter === "exercise"
                  ? mockTrainingData
                      .map((item) => item.exercise)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((exercise) => (
                        <option key={exercise} value={exercise}>
                          {exercise}
                        </option>
                      ))
                  : selectedFilter === "muscle"
                  ? mockTrainingData
                      .map((item) => item.muscle)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((muscle) => (
                        <option key={muscle} value={muscle}>
                          {muscle}
                        </option>
                      ))
                  : null}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <label
              className="text-white uppercase font-bold"
              htmlFor="filterSelect"
            >
              Graph:
            </label>
            <select
              className="bg-mainDark text-white border-b-2"
              id="filterSelect"
              onChange={console.log("todo")}
            >
              <option value="placeholder">Volume Per Workout</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2">{timeRangeButtons}</div>

        <TrainingChart
          data={filteredData}
          timeRange={timeRange}
          selectedFilter={selectedFilter}
          selectedCategory={selectedCategory}
          selectedExercise={selectedExercise}
        />
      </div>
    </div>
  );
};

export default page;
