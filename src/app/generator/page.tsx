"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC, useState } from "react";
// import { promptTemplateCall } from "../actions/promptTemplateCall"
import { promptTemplateCall } from "@/actions/promptTemplateCall";
import { FieldValues, useForm } from "react-hook-form";
import dotenv from "dotenv";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { wordlingGenerator } from "@/actions/wordlingGenerator";

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
  const [res, setRes] = useState<string>("There are no bad questions");
  const [sdprompt, setSdprompt] = useState<string>("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  dotenv.config();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const gptresponse = await promptTemplateCall(
      data.product,
      "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"
      // process.env.OPENAI_API_KEY || "" // Use optional chaining
    );

    const jsonResponse =
      typeof gptresponse === "string" ? JSON.parse(gptresponse) : gptresponse;
    const gpt_prompt = jsonResponse.prompt;

    setRes(gptresponse);
    setSdprompt(gpt_prompt);

    // Image response

    // const response = await fetch("/api/predictions", {
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

    //   console.log({ prediction });
    //   setPrediction(prediction);

    setLoading(false);
  };

  return (
    <>
      <MaxWidthWrapper className="mt-24">
        <div className="flex-col justify-center items-center h-screen space-x-4">
          <h1 className="text-2xl font-bold mb-4">
            Gerate your own wordlings!
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
                <div>
                  <p>{res}</p>
                  <p>{sdprompt}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
