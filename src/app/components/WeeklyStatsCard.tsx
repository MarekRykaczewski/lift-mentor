import { mockTrainingData } from "../mockData";
import WeightCard from "./CurrentWeight";
import VolumeGraph from "./VolumeGraph";
import VolumeCard from "./WeeklyVolume";

const WeeklyStatsCard = () => {
  return (
    <div className="flex flex-col w-full gap-2 border-2 border-gray-600 bg-mainDark text-white p-8 rounded-lg">
      <div className="uppercase font-bold text-xl mb-2">Weekly Stats</div>
      <div className="flex mb-2">
        <WeightCard />
        <VolumeCard />
      </div>
      <div className="uppercase font-bold"> Daily Training Volume</div>
      <p className="text-xs text-gray-400">
        Your training volume by muscle group
      </p>
      <VolumeGraph trainingData={mockTrainingData} />
    </div>
  );
};

export default WeeklyStatsCard;
