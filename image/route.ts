// import Replicate from 'replicate';

// const replicate = new Replicate({
//   auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
// });

// export async function POST(req: Request, res: Response) {
//   if (!process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN) {
//     throw new Error(
//       "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
//     );
//   }

//   if (!req.body) {
//     res.statusCode = 400;
//     res.end(JSON.stringify({ detail: "Request body is missing" }));
//     return;
//   }

//   const prediction = await replicate.predictions.create({
//     version: "911b23d16fa146646a82e6c7635ef3c13026f08883417f4b0151f0515e295259",
//     input: { prompt: req.body.prompt },
//   });

//   if (prediction?.error) {
//     res.statusCode = 500;
//     res.end(JSON.stringify({ detail: prediction.error }));
//     return;
//   }

//   res.statusCode = 201;
//   res.end(JSON.stringify(prediction));
// }
