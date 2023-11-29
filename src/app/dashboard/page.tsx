import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Press_Start_2P } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

import Link from "next/link";

const Page = () => {
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
        <Link href="/game">
          <Card>
            <CardHeader>
              <CardTitle>Continue Your Journey</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>Resume your adventure in the world of Wordlings.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/generator">
          <Card>
            <CardHeader>
              <CardTitle>Generate Custom Wordlings</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>Click here to create and explore new Wordlings!</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Page;
