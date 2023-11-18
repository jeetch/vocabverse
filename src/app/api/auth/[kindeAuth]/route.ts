import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const endpoint = req.query.kindeAuth;
  const handler = await handleAuth(req, endpoint);
  return handler(req, res);
}