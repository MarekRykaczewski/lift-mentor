"use client";

import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

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

  // Organize the grouped data into separate datasets for each muscle
  const datasets = Object.values(groupedData).reduce((acc, entry) => {
    if (!acc[entry.muscle]) {
      acc[entry.muscle] = {
        label: entry.muscle,
        data: [],
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
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg drop-shadow">
      <h2>Training Volume Graph</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default VolumeGraph;
