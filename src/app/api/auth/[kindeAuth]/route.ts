import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const endpoint = req.query.kindeAuth;
    const handler = await handleAuth(req, endpoint);
    return handler(req, res);
  }

  // Handle other request methods if necessary
  res.status(405).send('Method Not Allowed');
}