import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { CoinMarketContext } from "../context/context";
import CoinTableHeader from "./CoinTableHeader";
import CoinTableRow from "./CoinTableRow";
import btc from "../assets/btc.png";

const CoinTable: React.FC = () => {
  const [coinData, setCoinData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { getTopTenCoins } = useContext(CoinMarketContext);

  const router = useRouter();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
        if (element.cmc_rank <= 10) filteredResponse.push(element);
      }

      setCoinData(filteredResponse);
    } catch (e) {
      console.log((e as Error).message);
    }
    setLoading(false);
  }, [getTopTenCoins]);

  console.log(coinData);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(typeof coinData, coinData);

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          {/* TABLE HEADER */}
          <CoinTableHeader />
          {loading ? (
            <caption className="flex justify-center w-full">
              <h1 className="text-white">Loading...</h1>
            </caption>
          ) : (
            // TABLE ROWS
            <tbody>
              {coinData && coinData ? (
                coinData.map((coin, idx: number) => (
                  <CoinTableRow
                    key={idx}
                    starNum={coin.cmc_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={btc}
                    showBuy={true}
                    hRate={coin.quote.USD.percent_change_24h}
                    dRate={coin.quote.USD.percent_change_7d}
                    price={coin.quote.USD.price}
                    marketCapValue={coin.quote.USD.market_cap}
                    volumeCryptoValue={coin.quote.USD.volume_24h}
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                ))
              ) : (
                <></>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
