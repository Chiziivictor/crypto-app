import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Star from "../assets/svg/star";
import More from "../assets/svg/more";
import Rate from "./UI/Rate";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdc from "../assets/usdc.png";
import usdt from "../assets/usdt.png";
import xrp from "../assets/xrp.png";
import cardano from "../assets/cardano.png";
import tera from "../assets/tera.png";
import solana from "../assets/solana.png";
import avalanche from "../assets/avalanche.png";
import bnb from "../assets/bnb.png";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

interface CoinTableRowProps {
  starNum: string;
  coinName: string;
  coinIcon: StaticImageData;
  coinSymbol: string;
  price: number;
  showBuy: boolean;
  hRate: number;
  dRate: number;
  marketCapValue: number;
  volumeValue: number;
  volumeCryptoValue: number;
  circulatingSupply: number;
}

const CoinTableRow: React.FC<CoinTableRowProps> = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol,
  price,
  showBuy,
  hRate,
  dRate,
  marketCapValue,
  volumeValue,
  volumeCryptoValue,
  circulatingSupply,
}) => {
  const router = useRouter();

  const viewCoinDetails = () => {
    router.push(
      `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    );
  };

  const viewPrice = () => {
    router.push(
      `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    );
  };

  const formatNum = (num: number) => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  const coinIconHandler = () => {
    switch (coinName) {
      case "Bitcoin":
        return (
          <Image
            className="rounded-full"
            src={btc}
            alt="btc"
            width={20}
            height={20}
          />
        );
      case "Ethereum":
        return (
          <Image
            className="rounded-full"
            src={eth}
            alt="eth"
            width={20}
            height={20}
          />
        );
      case "Tether":
        return (
          <Image
            className="rounded-full"
            src={usdt}
            alt="usdt"
            width={20}
            height={20}
          />
        );
      case "USD Coin":
        return (
          <Image
            className="rounded-full"
            src={usdc}
            alt="usdc"
            width={20}
            height={20}
          />
        );
      case "BNB":
        return (
          <Image
            className="rounded-full"
            src={bnb}
            alt="bnb"
            width={20}
            height={20}
          />
        );
      case "XRP":
        return (
          <Image
            className="rounded-full"
            src={xrp}
            alt="xrp"
            width={20}
            height={20}
          />
        );
      case "Cardano":
        return (
          <Image
            className="rounded-full"
            src={cardano}
            alt="cardano"
            width={20}
            height={20}
          />
        );
      case "Tera":
        return (
          <Image
            className="rounded-full"
            src={tera}
            alt="tera"
            width={20}
            height={20}
          />
        );
      case "Solana":
        return (
          <Image
            className="rounded-full"
            src={solana}
            alt="solana"
            width={20}
            height={20}
          />
        );
      case "Avalanche":
        return (
          <Image
            className="rounded-full"
            src={avalanche}
            alt="avalanche"
            width={20}
            height={20}
          />
        );
      case "Binance":
        return (
          <Image
            className="rounded-full"
            src={bnb}
            alt="bnd"
            width={20}
            height={20}
          />
        );
      default:
        return (
          <Image
            className="rounded-full"
            src={btc}
            alt="btc"
            width={20}
            height={20}
          />
        );
    }
  };

  return (
    <tr className={styles.tableRow}>
      <>
        <td scope="row">
          <div className="flex gap-4">
            <Star />
            {starNum}
          </div>
        </td>
        {coinIcon && coinIcon ? (
          <td className="cursor-pointer">
            <div className={styles.coinNameRow} onClick={viewCoinDetails}>
              <div className="mr-3 flex" onClick={viewCoinDetails}>
                <div className="mr-2">{coinIconHandler()}</div>
                {coinName}
              </div>

              <p>
                {coinName === "Bitcoin" ||
                coinName === "Ethereum" ||
                coinName === "Tether" ? (
                  <span className={styles.buyButton}>Buy</span>
                ) : (
                  <></>
                )}
              </p>
            </div>
          </td>
        ) : (
          <></>
        )}

        <td className="cursor-pointer" onClick={viewPrice}>
          <p>${formatNum(price)}</p>
        </td>
        <td>
          <Rate isIncrement={hRate > 0} rate={`${formatNum(hRate)}%`} />
        </td>
        <td>
          <Rate isIncrement={dRate > 0} rate={`${formatNum(dRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>
        <td className="cursor-pointer">
          <More />
        </td>
      </>
    </tr>
  );
};

export default CoinTableRow;
