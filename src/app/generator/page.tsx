"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC, useState } from "react";
// import { promptTemplateCall } from "../actions/promptTemplateCall"
import { promptTemplateCall } from "@/actions/promptTemplateCall";
import { FieldValues, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const {} = getKindeServerSession();

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
  const [res, setRes] = useState<string>("");
  const [sdprompt, setSdprompt] = useState<string>("");
  const [wordling_name, setWordling_name] = useState<string>("");
  const [wordling_desc, setWordling_desc] = useState<string>(
    "Enter a word or try abate, garrulous, munificent.."
  );
  const [wordling_word, setWordling_word] = useState<string>("");
  const [wordling_sentence, setWordling_sentence] = useState<string>("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const gptresponse = await promptTemplateCall(
      data.product,
      process.env.NEXT_PUBLIC_OPENAI_API_KEY || "" // Use optional chaining
    );

    const jsonResponse =
      typeof gptresponse === "string" ? JSON.parse(gptresponse) : gptresponse;
    const gpt_prompt = jsonResponse.prompt;
    const wordling_name = jsonResponse.name;
    const wordling_desc = jsonResponse.description;
    const wordling_word = jsonResponse.actual_meaning;
    const wordling_sentence = jsonResponse.sentence;

    setRes(gptresponse);
    setSdprompt(gpt_prompt);
    setWordling_name(wordling_name);
    setWordling_desc(wordling_desc);
    setWordling_word(wordling_word);
    setWordling_sentence(wordling_sentence);
    setLoading(false);

    // Image response

    // const response = await fetch("/api/image", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     prompt: gpt_prompt,
    //   }),
    // });

    // let prediction = await response.json();

    // if (response.status !== 201) {
    //   setError(prediction.detail);
    //   return;
    // }
    // setPrediction(prediction);
  };

  return (
    <>
      <MaxWidthWrapper className="mt-24">
        <div className="flex-col justify-center items-center h-screen space-x-4">
          <h1 className={cn("text-2xl mb-4", player.className)}>
            Generate your own wordlings!
          </h1>

          <div className="flex flex-col gap-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Enter the word you want to learn and leave the rest to us"
                {...register("product", { required: true })}
                className=""
              />
              {errors.question && <p>This field is required</p>}
              <Button type="submit" className="h-full" variant={"outline"}>
                Submit
              </Button>
            </form>

            <div className="text-center">
              {loading && <p>Loading...</p>}
              {!loading && res && (
                <>
                  <h1 className={cn("text-2xl mt-24 mb-4", player.className)}>
                    {wordling_name}
                  </h1>

                  <p className={cn("text-md mt-14 mb-4", player.className)}>
                    {wordling_desc}
                  </p>

                  <div className="mt-14 text-xs font-italic text-gray-600">
                    <p>{sdprompt}</p>
                  </div>

                  <p className={cn("text-sm mt-48 mb-4", player.className)}>
                    {wordling_word}
                  </p>

                  <p className={cn("text-sm mb-4", player.className)}>
                    {wordling_sentence}
                  </p>
                </>
              )}
              {!loading && prediction && <p>{prediction}</p>}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
