import Chart from "chart.js/auto";
import "chartjs-adapter-dayjs-4";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";

const TrainingChart = ({
  data,
  timeRange,
  selectedFilter,
  selectedExercise,
  selectedCategory,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sort the data by date
    const sortedData = [...data].sort((a, b) => dayjs(a.date) - dayjs(b.date));

    // Filter data based on time range
    const filteredData =
      timeRange === "all"
        ? sortedData
        : sortedData.filter((item) =>
            dayjs(item.date).isAfter(
              dayjs().subtract(1, timeRange === "1m" ? "month" : "day")
            )
          );

    // Prepare the data
    const labels = filteredData.map((item) => dayjs(item.date).toDate());

    // Filter and calculate volumes based on the selected exercise or category
    const volumes = filteredData.map((item) => {
      if (
        (selectedFilter === "exercise" &&
          (selectedExercise === "all" || item.exercise === selectedExercise)) ||
        (selectedFilter === "muscle" &&
          (selectedCategory === "all" || item.muscle === selectedCategory))
      ) {
        return item.sets * item.reps * item.weight;
      } else {
        return null; // Set volume to null for data points not matching the selected exercise or category
      }
    });

    // Destroy any existing chart before creating a new one
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new chart
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Volumes",
            data: volumes,
            borderColor: "rgba(129, 140, 248, 1)",
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(129, 140, 248, 0.2)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Weight",
            },
          },
        },
      },
    });

    // Attach the chart instance to the ref for later cleanup
    chartRef.current.chart = myChart;
  }, [data, timeRange, selectedFilter, selectedExercise, selectedCategory]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default TrainingChart;
