import { useCallback, useContext, useEffect, useState } from "react";
import fire from "../assets/fire.png";
import ReactSwitch from "react-switch";
import Rate from "./UI/Rate";
import TrendingCard from "./UI/TrendingCard";
import { CoinMarketContext } from "../context/context";
import ChevronDown from "../assets/svg/chevronDown";
import ChevronUp from "../assets/svg/chevronUp";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-xl text-white`,
  flexCenter: `flex justify-center items-center`,
};

const Trending: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [trendingData, setTrendingData] = useState([]);
  const [rate, setRate] = useState<number | null>(null);
  const [isIncrement, setIsIncrement] = useState(true);

  const { getTrending } = useContext(CoinMarketContext);

  const fetchData = useCallback(async () => {
    try {
      const res = await getTrending();

      res.pop();
      setTrendingData(res);
    } catch (err) {
      console.log((err as Error).message);
    }
  }, [getTrending]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white mt-24">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className="text-lg text-white">
            Cryptocurrency Prices by Market Cap
          </h1>

          <div className="hidden sm:flex items-center">
            <p className="text-gray-400">Highlights &nbsp; </p>
            <ReactSwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>

        <br />
        <p className="text-gray-400 lex text-sm">
          The global crypto market cap is $1.74T, a &nbsp;{" "}
          <span className="text-green">0.5%</span>
          {/* <span className="text-sm  flex items-center">
            {isIncrement ? (
              <ChevronUp fill="#00A854" />
            ) : (
              <ChevronDown fill="#EA3943" />
            )}
            <span
              className={
                isIncrement ? "ml-2 text-[#00A854]" : "ml-2 text-[#EA3943]"
              }
            >
              {rate}
            </span>
          </span> */}
          <span className="text-white">
            &nbsp;change over the last day.&nbsp;
            <span className="underline cursor-pointer">Read More</span>
          </span>
        </p>
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
