import Image, { StaticImageData } from "next/image";
import React from "react";
import MoreButton from "./MoreButton";
import Rate from "./Rate";

interface TrendingCardProps {
  title: string;
  icon: StaticImageData;
  trendingData: any[];
}

const styles = {
  trendingCard: `w-4/5 sm:w-3/5 p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
  trendingCardRow: `w-64 flex items-center justify-between mb-4 text-[0.93rem]`,
};

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  icon,
  trendingData,
}) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex items-center">
          {icon && (
            <Image src={icon} width={27} height={27} alt={`${title} image`} />
          )}
          &nbsp; &nbsp;
          <p className="font-bold text-sm lg:text-base">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />
      <div className="flex flex-wrap justify-around ">
        {trendingData.map(({ item }) => (
          <div className={styles.trendingCardRow} key={item.score}>
            <p className="opacity-40 text-xs md:text:sm">{item.score + 1}</p>
            <div className="w-full flex text-xs lg:text:sm">
              <div className="mx-5 mr-2">
                {icon && <Image src={item.thumb} width={20} height={20} />}
              </div>
              <p className="font-bold">
                {item.name}
                <span className="text-gray-400"> {item.symbol}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCard;
