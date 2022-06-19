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

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getTopTenCoins();
      setCoinData(res);
    } catch (e) {
      console.log((e as Error).message);
    }
    setLoading(false);
  }, [getTopTenCoins]);

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
            <tbody>
              <tr>
                <td colSpan={8}>
                  <div className="flex justify-center items-center">
                    Loading...
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            // TABLE ROWS
            <tbody>
              {coinData.length > 0 &&
                coinData?.map((coin, idx: number) => (
                  <CoinTableRow
                    key={idx}
                    starNum={coin.market_cap_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={coin.image}
                    hRate={coin.market_cap_change_percentage_24h}
                    price={coin.current_price}
                    marketCapValue={coin.market_cap}
                    volumeCryptoValue={coin.total_volume}
                    volumeValue={coin.total_supply}
                    circulatingPrice={coin.circulating_supply}
                  />
                ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
