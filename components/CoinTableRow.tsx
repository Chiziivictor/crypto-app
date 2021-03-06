import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Star from "../assets/svg/star";
import More from "../assets/svg/more";
import Rate from "./UI/Rate";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem] p-4`,
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

interface CoinTableRowProps {
  starNum: string;
  coinName: string;
  coinIcon: StaticImageData;
  coinSymbol: string;
  price: number;
  hRate: number;
  marketCapValue: number;
  volumeValue: number;
  volumeCryptoValue: number;
  circulatingPrice: number;
}

const CoinTableRow: React.FC<CoinTableRowProps> = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol,
  price,
  hRate,
  marketCapValue,
  volumeValue,
  volumeCryptoValue,
  circulatingPrice,
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
    if (typeof num === "number") {
      return Number(num.toFixed(2)).toLocaleString();
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
                <div className="mr-2">
                  <Image src={coinIcon} alt={coinName} width={20} height={20} />
                </div>
                {coinName}
              </div>
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
            <p>{formatNum(circulatingPrice)}</p>
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
