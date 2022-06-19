import { useCallback, useContext, useEffect, useState } from "react";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import ReactSwitch from "react-switch";
import Rate from "./UI/Rate";
import TrendingCard from "./UI/TrendingCard";
import { CoinMarketContext } from "../context/context";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex justify-center items-center`,
};

const Trending: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [trendingData, setTrendingData] = useState([]);

  const { getTrending } = useContext(CoinMarketContext);

  const fetchData = useCallback(async () => {
    try {
      const res = await getTrending();
      setTrendingData(res);
    } catch (err) {
      console.log((err as Error).message);
    }
  }, [getTrending]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(typeof trendingData, trendingData);

  return (
    <div className="text-white ">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Today's Cryptocurrency Prices by Market Cap
          </h1>

          <div className="flex items-center">
            <p className="text-gray-400">Highlights &nbsp; </p>
            <ReactSwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day.{" "}
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />
        <div className={styles.flexCenter}>
          <TrendingCard
            title="Trending"
            icon={fire}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
