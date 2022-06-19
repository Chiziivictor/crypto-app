import React, { SetStateAction, useEffect, useState } from "react";
import Header from "../../components/Header";
import solana from "../../assets/solana.png";
import Usd from "../../assets/svg/usd";
import CoinPriceConverter from "../../components/CoinPriceConverter";
import Example from "../../components/HeaderTailwind";

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#1771924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mt-16 max-w-screen-2xl mx-4 sm:mx-8 md:mx-16`,
  flexStart: `flex items-start`,
  flexBetwwen: `flex justify-between`,
  flexBetwwenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
};

const Currencies: React.FC = () => {
  const [coinName, setCoinName] = useState<string | null>(null);
  const [coinPrice, setCoinPrice] = useState<string | null>("");
  const [coinSymbol, setCoinSymbol] = useState<string | null>("");

  useEffect(() => {
    getUrlData();
  }, []);

  const getUrlData: () => Promise<any> = async () => {
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);

    const price = urlParams.get("price");

    setCoinName(urlParams.get("coin"));
    price && setCoinPrice(price.toLocaleString());
    setCoinSymbol(urlParams.get("symbol"));
  };

  return (
    <div className={styles.info}>
      <Example />
      <main className={styles.main}>
        <div>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetwwen}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>
              </div>

              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.tabItem}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>ALL</p>
                <p className={styles.tabItem}>LOG</p>
              </div>
            </div>
            <br />
            {/* <Graph /> */}
            <br />
            <div className={styles.flexBetwwenCenter}>
              <div className="flex">
                <div className={styles.flexCenter}>
                  <input className="outline-none" type="checkbox" /> &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={styles.flexCenter}>
                  <input type="checkbox" /> &nbsp; BTC
                </div>
              </div>

              <p>
                Want more data?
                <span className="text-[#6188FF]">
                  &nbsp;&nbsp;Check out our API
                </span>
              </p>
            </div>
            <br />
            <br />
            <CoinPriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              fromLogo={solana}
              to="United States Dollars"
              toLogo={<Usd />}
              toSymbol="$"
              price={coinPrice}
            />
          </div>

          {/* <div className="pt-10 ml-5"><Chat/></div> */}
        </div>
      </main>
    </div>
  );
};

export default Currencies;
