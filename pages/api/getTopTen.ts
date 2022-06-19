import { NextApiRequest, NextApiResponse } from "next";

// COIN GECKO API handler
const url = "https://api.coingecko.com/api/v3/";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getData = async () => {
    const response = await fetch(
      `${url}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ data });
  };
  getData();
}

// COINMARKETCAP API handler
// const url =
//   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const getData = async () => {
//     const response = await fetch(
//       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "*/*",
//         },
//       }
//     );
//     const data = await response.json();

//     console.log(data);
//     res.status(200).json({ data });
//   };
//   getData();
// }

// ae7019df-cbba-4348-8b75-1bd7f2afc90d
