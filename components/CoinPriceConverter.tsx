import React from "react";
import { StaticImageData } from "next/image";
import converter from "../assets/converter.png";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdc from "../assets/usdc.png";
import usdt from "../assets/usdt.png";
import xrp from "../assets/xrp.png";
import cardano from "../assets/cardano.png";
import tera from "../assets/tera.png";
import solana from "../assets/solana.png";
import avalanche from "../assets/avalanche.png";
import bnd from "../assets/bnb.png";
import Image from "next/image";

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
};

interface CoinPriceConverterProps {
  from: string | null;
  fromSymbol: string | null;
  fromLogo: StaticImageData;
  to: string;
  toLogo: React.ReactNode;
  toSymbol: string;
  price: string | null;
}

const CoinPriceConverter: React.FC<CoinPriceConverterProps> = ({
  from,
  fromSymbol,
  fromLogo,
  toLogo,
  price,
  to,
  toSymbol,
}) => {
  const coinIcon = () => {
    switch (from) {
      case "Bitcoin":
        return (
          <Image
            className="rounded-full"
            src={btc}
            alt="btc"
            width={50}
            height={50}
          />
        );
      case "Ethereum":
        return (
          <Image
            className="rounded-full"
            src={eth}
            alt="eth"
            width={50}
            height={50}
          />
        );

      case "USD Coin":
        return (
          <Image
            className="rounded-full"
            src={usdc}
            alt="usdc"
            width={50}
            height={50}
          />
        );
      case "USDT":
        return (
          <Image
            className="rounded-full"
            src={usdt}
            alt="usdt"
            width={50}
            height={50}
          />
        );
      case "XRP":
        return (
          <Image
            className="rounded-full"
            src={xrp}
            alt="xrp"
            width={50}
            height={50}
          />
        );
      case "Cardano":
        return (
          <Image
            className="rounded-full"
            src={cardano}
            alt="cardano"
            width={50}
            height={50}
          />
        );
      case "Tera":
        return (
          <Image
            className="rounded-full"
            src={tera}
            alt="tera"
            width={50}
            height={50}
          />
        );
      case "Solana":
        return (
          <Image
            className="rounded-full"
            src={solana}
            alt="solana"
            width={50}
            height={50}
          />
        );
      case "Avalanche":
        return (
          <Image
            className="rounded-full"
            src={avalanche}
            alt="avalanche"
            width={50}
            height={50}
          />
        );
      case "Binance":
        return (
          <Image
            className="rounded-full"
            src={bnd}
            alt="bnd"
            width={50}
            height={50}
          />
        );
      default:
        return (
          <Image
            className="rounded-full"
            src={btc}
            alt="btc"
            width={50}
            height={50}
          />
        );
    }
  };

  const formatNum = (num: string | number) => {
    if (typeof num === "string") {
      return Number(parseInt(num).toFixed(2)).toLocaleString();
    }

    return Number(num.toFixed(2)).toLocaleString();
  };

  return (
    <div>
      <h2>
        {fromSymbol} to {toSymbol} Converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className="flex">
            <div className="avatar-container">
              {fromLogo && fromLogo ? coinIcon() : <div></div>}
            </div>
            &nbsp; &nbsp;
            <div>
              <p>{fromSymbol}</p>
              <h4>{from}</h4>
            </div>
          </div>
        </div>

        <div className="flex">
          <p className="text-3xl">1</p>
          &nbsp;&nbsp;
          <div>
            <Image alt="" src={converter} width={40} height={40} />
          </div>
          &nbsp;&nbsp;
          <div className="flex">
            {toLogo}
            &nbsp;&nbsp;
            <div>
              <p>{toSymbol}</p>
              <h4>{to}</h4>
            </div>
          </div>
        </div>
        <p className="text-3xl">${price}</p>
      </div>

      <div className={styles.convertButton}>Convert</div>
    </div>
  );
};

export default CoinPriceConverter;
