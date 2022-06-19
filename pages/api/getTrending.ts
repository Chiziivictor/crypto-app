import { NextApiRequest, NextApiResponse } from "next";

const url = "https://api.coingecko.com/api/v3/";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getData = async () => {
    const response = await fetch(`${url}search/trending`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();

    res.status(200).json({ data });
  };
  getData();
}
