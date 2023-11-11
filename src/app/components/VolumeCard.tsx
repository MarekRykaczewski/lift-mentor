import { mockTrainingData } from "../mockData";

const VolumeCard = () => {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // Calculate the weekly volume
  const weeklyVolumeKgs = mockTrainingData
    .filter((data) => data.date >= oneWeekAgo && data.date <= currentDate)
    .reduce((total, data) => total + data.weight, 0);

  // Calculate the volume from the previous week
  const previousWeekStartDate = new Date(oneWeekAgo);
  previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);
  const previousWeekEndDate = new Date(oneWeekAgo);
  const previousWeekVolumeKgs = mockTrainingData
    .filter(
      (data) =>
        data.date >= previousWeekStartDate && data.date <= previousWeekEndDate
    )
    .reduce((total, data) => total + data.weight, 0);

  // Calculate the percentage change
  const percentageChange =
    previousWeekVolumeKgs !== 0
      ? ((weeklyVolumeKgs - previousWeekVolumeKgs) / previousWeekVolumeKgs) *
        100
      : 0;

  return (
    <div className="flex flex-col w-full gap-2 items-start">
      <p className="text-sm text-gray-400">Volume</p>
      <p className="text-xl font-bold">
        {weeklyVolumeKgs}
        <span className="text-gray-400 text-sm font-normal"> kgs</span>
      </p>
      <p className="text-xs text-gray-400">
        {previousWeekVolumeKgs !== 0 && (
          <span className="text-green-500 font-bold">
            {percentageChange > 0
              ? `+${percentageChange.toFixed(2)}%`
              : `${percentageChange.toFixed(2)}%`}
          </span>
        )}
        {previousWeekVolumeKgs !== 0
          ? ` ${percentageChange > 0 ? "more" : "less"} than last week`
          : "No previous data to compare"}
      </p>
    </div>
  );
};

export default VolumeCard;
