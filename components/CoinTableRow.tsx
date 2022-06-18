import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Star from "../assets/svg/star";
import More from "../assets/svg/more";
import Rate from "./UI/Rate";
import CoinNameRow from "./CoinNameRow";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
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

  const formatPercentage = (num: number) => {
    return Number(num.toFixed(2)).toLocaleString() + "%";
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
            <div onClick={viewCoinDetails}>
              <Image src={coinIcon} alt={coinName} width={20} height={20} />
              <p>{coinName}</p>
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
