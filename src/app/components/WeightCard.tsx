import { mockBodyWeightData } from "../mockData";

const WeightCard = () => {
  // Find the most recent body weight
  const mostRecentBodyWeightData = mockBodyWeightData.reduce(
    (mostRecent, data) => {
      return data.date > mostRecent.date ? data : mostRecent;
    }
  );

  // Find the body weight measurement one entry before the most recent one
  const indexOfMostRecent = mockBodyWeightData.indexOf(
    mostRecentBodyWeightData
  );
  const previousBodyWeightData =
    indexOfMostRecent > 0 ? mockBodyWeightData[indexOfMostRecent - 1] : null;

  // Calculate the raw increase
  const rawIncrease = previousBodyWeightData
    ? mostRecentBodyWeightData.weight - previousBodyWeightData.weight
    : 0;

  return (
    <div className="flex flex-col w-full gap-2 items-center bg-white p-2 rounded-lg drop-shadow">
      <p>Body Weight</p>
      <p className="text-xl font-bold">{mostRecentBodyWeightData.weight} kgs</p>
      <p className="text-xs">
        {previousBodyWeightData && (
          <span className="text-green-500 font-bold">
            {rawIncrease > 0
              ? `+${rawIncrease.toFixed(2)} kgs`
              : `${rawIncrease.toFixed(2)} kgs`}
          </span>
        )}
        {previousBodyWeightData
          ? ` ${
              rawIncrease > 0 ? "more" : "less"
            } than the previous measurement`
          : "No previous data to compare"}
      </p>
    </div>
  );
};

export default WeightCard;
