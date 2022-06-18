import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ChevronDown from "../assets/svg/chevronDown";
import Info from "../assets/svg/info";
import { CoinMarketContext } from "../context/context";
import CoinTableHeader from "./CoinTableHeader";
import Rate from "./UI/Rate";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
};

const CoinTable: React.FC = () => {
  const [coinData, setCoinData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { getTopTenCoins } = useContext(CoinMarketContext);

  const router = useRouter();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let response = await getTopTenCoins();
      setCoinData(response.data);
    } catch (e) {
      let error = (e as Error).message;
      console.log(error);
    }
    setLoading(false);
  }, [getTopTenCoins]);

  useEffect(() => {
    fetchData();
  }, []);

  const viewCoinInfo = (coin: any) => {
    router.push(
      `/currencies/info?symbol=${coin.id}&coin=${coin.name}&price=${coin.price}`
    );
  };

  const viewCoinPrice = (coin: any) => {
    router.push(
      `/currencies/price?symbol=${coin.id}&coin=${coin.name}&price=${coin.price}`
    );
  };

  const formatNumber = (num: number) => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  const formatPercentage = (num: number) => {
    return Number(num.toFixed(2)).toLocaleString() + "%";
  };

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
              {coinData.map((coin: any, idx: number) => (
                <tr key={idx} className={styles.tableRow}>
                  <td className="p-2">{coin.market_cap_rank}</td>
                  <td className="flex items-center p-2 pr-20">
                    <span className="mr-4">
                      <Image src={coin.image} width={20} height={20} />
                    </span>
                    {coin.name}
                  </td>
                  <td className="p-2">${formatNumber(coin.current_price)}</td>
                  <td className="p-2">
                    <Rate
                      isIncrement={coin.price_change_percentage_24h > 0}
                      rate={formatPercentage(coin.price_change_percentage_24h)}
                    />
                  </td>
                  <td className="p-2">${formatNumber(coin.market_cap)}</td>
                  <td className="p-2">${formatNumber(coin.total_volume)}</td>
                  <td className="p-2">
                    {formatNumber(coin.circulating_supply)}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
