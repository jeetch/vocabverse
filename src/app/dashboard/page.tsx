import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Press_Start_2P } from "next/font/google";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

import Link from "next/link";

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div
      className={cn(
        "flex justify-center items-center h-screen space-x-4",
        player.className
      )}
    >
      <div className="w-[1050px] h-[595px] bg-white bg-opacity-10 hover:bg-opacity-20">
        <Link href="/generator">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Go to Wordlings Generator
          </button>
        </Link>
      </div>
      <div className="w-[1050px] h-[595px] bg-white bg-opacity-10 hover:bg-opacity-20">
        <Link href="/game">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Continue Adventure
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
