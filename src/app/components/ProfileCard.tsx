import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col gap-2 p-2 rounded-xl justify-around items-center mb-4 text-center">
        <Image
          className="rounded-full"
          src={"/avatar_placeholder.png"}
          alt="Your profile picture"
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <span className="text-2xl text-center font-bold">John Doe</span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-around text-center">
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm text-indigo-400">Age</span>
          <span className="font-bold">25</span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm text-indigo-400">Height</span>
          <span className="font-bold">180cm</span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm text-indigo-400">Weight</span>
          <span className="font-bold">75kg</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
