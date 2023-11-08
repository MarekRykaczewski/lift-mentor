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
    <div className="flex flex-col gap-2 items-center bg-white p-2 rounded-lg drop-shadow">
      <p>Volume</p>
      <p className="text-xl font-bold">{weeklyVolumeKgs} kgs</p>
      <p className="text-xs">
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
