import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div
      className={cn(
        "flex-col justify-center items-center h-screen",
        player.className
      )}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-md mt-24 mb-4">Welcome back adventurer!</h1>

        <iframe src="/game_files/index.html" className="w-[1050px] h-[595px]" />

        <div className="flex flex-col mt-12 items-center text-xs">
          <p>Click on the game to begin</p>
          <p>Use WASD to move</p>
          <p>Walk into the green patches to encounter wordlings</p>
          <p>Press space to interact with characters</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
