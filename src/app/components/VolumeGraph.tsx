"use client";

import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

Chart.defaults.color = "#9ca3af";

const VolumeGraph = ({ trainingData }) => {
  // Group the training data by date and muscle
  const groupedData = trainingData.reduce((acc, entry) => {
    const key = `${entry.date.toISOString().split("T")[0]}_${entry.muscle}`;
    if (!acc[key]) {
      acc[key] = {
        date: entry.date,
        muscle: entry.muscle,
        volume: 0,
      };
    }
    acc[key].volume += entry.weight * entry.sets * entry.reps;
    return acc;
  }, {});

  const customColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33E6", "#E6FF33"];

  // Organize the grouped data into separate datasets for each muscle
  const datasets = Object.values(groupedData).reduce((acc, entry, index) => {
    if (!acc[entry.muscle]) {
      acc[entry.muscle] = {
        label: entry.muscle,
        data: [],
        backgroundColor: customColors[index % customColors.length],
      };
    }
    acc[entry.muscle].data.push(entry.volume);
    return acc;
  }, {});

  const chartData = {
    labels: Object.values(groupedData).map(
      (entry) => entry.date.toISOString().split("T")[0]
    ),
    datasets: Object.values(datasets),
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // hide vertical gridlines
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default VolumeGraph;
