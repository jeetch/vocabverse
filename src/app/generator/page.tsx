"use client";

import { FC, useState } from "react";
// import { promptTemplateCall } from "../actions/promptTemplateCall"
import { promptTemplateCall } from "@/actions/promptTemplateCall";
import { FieldValues, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const greWords = [
    "amiable",
    "soporific",
    // "timorous",
    "garrulous",
    "ostentatious",
    "abate",
    "taciturn",
  ];

  const setRandomWord = () => {
    const randomWord = greWords[Math.floor(Math.random() * greWords.length)];
    setValue("product", randomWord);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      product: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [imgloading, setImgloading] = useState(false);
  const [res, setRes] = useState<string>("");
  const [sdprompt, setSdprompt] = useState<string>("");
  const [wordling_name, setWordling_name] = useState<string>("");
  const [wordling_desc, setWordling_desc] = useState<string>(
    "Enter a word or try abate, garrulous, munificent.."
  );
  const [wordling_word, setWordling_word] = useState<string>("");
  const [wordling_sentence, setWordling_sentence] = useState<string>("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: any) => {
    setLoading(true);
    setImgloading(true);
    setPrediction(null);
    const gptresponse = await promptTemplateCall(
      data.product,
      process.env.NEXT_PUBLIC_OPENAI_API_KEY || "" // Use optional chaining
    );

    const sendPromptToAPI = async (prompt: string) => {
      try {
        const response = await fetch(
          `https://vocabverse-api.onrender.com/request?text=${encodeURIComponent(
            prompt
          )}`
        );
        const data = await response.json();

        if (response.status === 200 && data.image && data.image.length > 0) {
          const imageUrl = data.image[0];
          // Use the imageUrl as needed
          // console.log(imageUrl);
          setPrediction(imageUrl);
          setImgloading(false);
        } else {
          setError("Failed to get image URL from API response");
        }
      } catch (error) {
        setError("Failed to send prompt to API");
      }
    };

    const jsonResponse =
      typeof gptresponse === "string" ? JSON.parse(gptresponse) : gptresponse;

    setRes(gptresponse);
    setSdprompt(jsonResponse.prompt);
    setWordling_name(jsonResponse.name);
    setWordling_desc(jsonResponse.description);
    setWordling_word(jsonResponse.actual_meaning);
    setWordling_sentence(jsonResponse.sentence);
    setLoading(false);

    // Image response

    // Call the function with the desired prompt
    sendPromptToAPI(jsonResponse.prompt);

    // }
    // setPrediction(prediction);
  };

  return (
    <>
      <MaxWidthWrapper className="mt-24">
        <div className="flex-col justify-center text-center items-center h-screen space-x-4">
          <h1 className={cn("text-2xl mb-4", player.className)}>
            Generate your own wordlings!
          </h1>

          <div className={cn("flex flex-col gap-4", player.className)}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Enter the word you want to learn"
                {...register("product", { required: true })}
                className=""
              />
              {/* {errors.question && <p>This field is required</p>} */}
              <Button type="submit" className="h-full" variant={"outline"}>
                Submit
              </Button>
              <Button
                type="button"
                className="h-full"
                variant={"outline"}
                onClick={setRandomWord}
              >
                Random word
              </Button>
            </form>

            <div className="text-center items-center justify-center">
              {loading && <p>Loading...</p>}
              {!loading && res && (
                <>
                  <h1 className={cn("text-2xl mt-14 mb-4", player.className)}>
                    {wordling_name}
                  </h1>
                  <p className={cn("text-md mt-14 mb-4", player.className)}>
                    {wordling_desc}
                  </p>{" "}
                </>
              )}
              {/* <div className="mt-14 text-xs font-italic text-gray-600">
                <p>{process.env.NEXT_PUBLIC_OPENAI_API_KEY}</p>
              </div> */}

              {imgloading && (
                <p>Imagining your Wordling... might take a minute...</p>
              )}
              {!imgloading && prediction && (
                <>
                  <div className="text-center">
                    <Image
                      src={prediction}
                      alt="product preview"
                      width={500}
                      height={500}
                      quality={100}
                      className="mx-auto"
                    />
                  </div>
                </>
              )}

              {!imgloading && res && (
                <>
                  <p className={cn("text-sm mt-12 mb-4", player.className)}>
                    {wordling_word}
                  </p>

                  <p className={cn("text-sm mb-4", player.className)}>
                    {wordling_sentence}
                  </p>
                </>
              )}

              {!imgloading && res && (
                <>
                  <Button
                    className={cn("mt-4 text-md h-full", player.className)}
                    variant={"outline"}
                  >
                    Add wordling to your vocabverse!
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
