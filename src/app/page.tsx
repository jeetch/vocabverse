"use client";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Coming Soon</p>
        </div>
        <h1
          className={cn(
            "mt-20 max-w-4xl text-3xl md:text-4xl lg:text-7xl",
            player.className
          )}
        >
          <div>
            You{" "}
            <span className="text-violet-600">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Build.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Play.",
                  1000,
                  "Learn.",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                cursor={false}
              />
            </span>{" "}
          </div>
        </h1>
        <p
          className={cn(
            "mt-12 max-2-prose text-zinc-200 sm:text-lg",
            player.className
          )}
        >
          Build your own creatures and characters in a Pokemon-like RPG game and
          learn vocabulary while having fun for your standardized tests
        </p>

        <RegisterLink
          className={buttonVariants({
            size: "lg",
            className: cn(
              "mt-5 hover:scale-110 hover:bg-white  ",
              player.className
            ),
          })}
          target="_blank"
        >
          Let&apos;s Go!
          {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
        </RegisterLink>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* preview image */}
          <div>
            <div className="mx-auto max-w-6xl px-6 lg-px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1809}
                    height={1126}
                    quality={100}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-300 sm:text-5xl">
              Personalised Vocabulary Learning
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Preparing for GRE or TOEFL has never been more fun
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-400">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Create your Vocabverse
              </span>
              <span className="mt-2 text-zinc-400">
                Select our pre-built lists for GRE/TOEFL or add your own words.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Catch Wondlings and Learn!
              </span>
              <span className="mt-2 text-zinc-400">
                Generate custom mnemonics and custom stories from your
                vocabverse and start learning.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
