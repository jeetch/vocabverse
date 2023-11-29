import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1
        className={cn(
          "text-4xl font-bold mb-24 text-gray-200",
          player.className
        )}
      >
        Welcome Adventurer!
      </h1>
      <div className="flex justify-center items-stretch space-x-4 border">
        <Link href="/game">
          <div
            className={cn(
              "text-center flex h-full flex-col items-center bg-white bg-opacity-10 hover:bg-opacity-20 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer p-20",
              player.className
            )}
          >
            <div className="text-gray-200">
              <h2 className="text-2xl font-bold mb-4">Continue Your Journey</h2>
              <p className="font-normal">
                Resume your adventure in the world of Wordlings..
              </p>
              {/* <p className="font-normal text-xs">Wordlings 5/100</p> */}
            </div>
          </div>
        </Link>
        <Link href="/generator">
          <div
            className={cn(
              "flex flex-col items-center bg-white bg-opacity-10 hover:bg-opacity-20 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer p-20  h-full",
              player.className
            )}
          >
            <div className="text-gray-200 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Generate Custom Wordlings
              </h2>
              <p className="font-normal">
                Click here to create and explore new Wordlings!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
