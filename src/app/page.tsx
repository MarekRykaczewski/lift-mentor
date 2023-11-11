import WeeklyStatsCard from "./components/WeeklyStatsCard";

export default function Home() {
  const currentDate = new Date().toDateString();

  return (
    <main className="w-full">
      <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min gap-4 ">
        <div className="col-span-full justify-start row-span-1 flex gap-2">
          <div className="text-xl px-2 text-white rounded-lg font-bold">
            Welcome back John 👋
          </div>
          <div className="flex items-center px-2 bg-indigo-700 text-white rounded-lg font-bold">
            {currentDate}
          </div>
        </div>
        <div className="flex w-full h-full col-span-full ">
          <WeeklyStatsCard />
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
        <div className="flex items-center justify-center p-2 border-2 rounded-lg border-gray-600 text-white font-bold drop-shadow">
          Placeholder
        </div>
      </div>
    </main>
  );
}
