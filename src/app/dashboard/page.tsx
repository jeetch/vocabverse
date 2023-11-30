import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Press_Start_2P } from "next/font/google";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

// import Link from "next/link";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center h-screen",
        player.className
      )}
    >
      <h1 className="text-4xl font-bold mb-24 text-gray-200">
        Welcome Adventurer!
      </h1>
      <div className="flex justify-center items-stretch space-x-4">
        <a href="/game">
          <div className="flex flex-col h-full items-center bg-white bg-opacity-10 hover:bg-opacity-20 border border-gray-200 rounded-lg shadow cursor-pointer p-20">
            <div className="text-gray-200 text-center">
              <h2 className="text-2xl font-bold mb-4">Continue Your Journey</h2>
              <p className="font-normal">
                Resume your adventure in the world of Wordlings.
              </p>
            </div>
          </div>
        </a>
        <a href="/generator">
          <div className="flex flex-col h-full items-center bg-white bg-opacity-10 hover:bg-opacity-20 border border-gray-200 rounded-lg shadow cursor-pointer p-20">
            <div className="text-gray-200 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Generate Custom Wordlings
              </h2>
              <p className="font-normal">
                Click here to create and explore new Wordlings!
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Page;
