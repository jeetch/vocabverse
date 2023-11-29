import { NextApiRequest, NextApiResponse } from 'next';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: NextApiRequest, res: NextApiResponse){
  if (!process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

  const prediction = await replicate.predictions.create({
    // Pinned to a specific version of Stable Diffusion
    // See https://replicate.com/stability-ai/sdxl
    version: "911b23d16fa146646a82e6c7635ef3c13026f08883417f4b0151f0515e295259",

    // This is the text prompt that will be submitted by a form on the frontend
    input: { prompt: req.body.prompt },
  });

  console.log(prediction.error )

  if (prediction?.error) {
    res.statusCode = 500;
    console.log(prediction.error )
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
