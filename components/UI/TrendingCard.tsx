import Image, { StaticImageData } from "next/image";
import React from "react";
import MoreButton from "./MoreButton";
import Rate from "./Rate";

interface TrendingCardProps {
  title: string;
  icon: StaticImageData;
  trendingData: {
    number: number;
    symbol: string;
    name: string;
    icon: StaticImageData;
    isIncrement: boolean;
    rate: string;
  }[];
}

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
};

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  icon,
  trendingData,
}) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && (
            <Image src={icon} width={27} height={27} alt={`${title} image`} />
          )}
          &nbsp; &nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />
      {trendingData.map((item, idx) => (
        <div className={styles.trendingCardRow} key={idx}>
          <p className="opacity-40">{item.number}</p>
          <div className="w-full flex">
            <div className="mx-5">
              {icon && <Image src={item.icon} width={20} height={20} />}
            </div>
            <p className="font-bold">
              {item.name}
              <span className="text-gray-400"> {item.symbol}</span>
            </p>
          </div>
          <Rate isIncrement={item.isIncrement} rate={item.rate} />
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
