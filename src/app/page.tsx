import VolumeCard from "./components/VolumeCard";
import WeightCard from "./components/WeightCard";

export default function Home() {
  const currentDate = new Date().toDateString();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min gap-4 p-4 sm:p-6 md:p-10 w-full text-gray-700 bg-gray-100 min-h-screen">
      <div className="col-span-full justify-start row-span-1 flex gap-2">
        <div className="text-xl px-2 rounded-lg font-bold">
          Welcome back John 👋
        </div>
        <div className="flex items-center px-2 bg-indigo-100 rounded-lg font-bold">
          {currentDate}
        </div>
      </div>
      <div className="flex w-full h-full">
        <VolumeCard />
      </div>
      <div className="flex w-full h-full">
        <WeightCard />
      </div>
      <div className="flex items-center justify-center p-2 bg-white drop-shadow">
        Placeholder
      </div>
      <div className="flex items-center justify-center p-2 bg-white drop-shadow">
        Placeholder
      </div>
      <div className="flex items-center justify-center p-2 bg-white drop-shadow">
        Placeholder
      </div>
      <div className="flex items-center justify-center p-2 bg-white drop-shadow">
        Placeholder
      </div>
    </main>
  );
}
