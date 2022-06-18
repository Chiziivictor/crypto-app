import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
};

interface CoinTableRowProps {
  starNum: string;
  coinName: string;
  coinIcon: string;
  coinSymbol: string;
  price: number;
  showBuy: boolean;
  hRate: number;
  dRate: number;
  hRateIsIncrement: boolean;
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
  hRateIsIncrement,
  marketCapValue,
  volumeValue,
  volumeCryptoValue,
  circulatingSupply,
}) => {
  const router = useRouter();

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

  return (
    <>
      <tr key={idx} className={styles.tableRow}>
        <td className="p-2">{}</td>
        <td className="flex items-center p-2 pr-20">
          <span className="mr-4">
            <Image src={} width={20} height={20} />
          </span>
          {}
        </td>
        <td className="p-2">${formatNumber()}</td>
        <td className="p-2">
          <Rate
            isIncrement={ > 0}
            rate={formatPercentage()}
          />
        </td>
        <td className="p-2">${formatNumber()}</td>
        <td className="p-2">${formatNumber()}</td>
        <td className="p-2">{formatNumber()}</td>
      </tr>
    </>
  );
};

export default CoinTableRow;
