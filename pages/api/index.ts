// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ message: 'api is' });
};