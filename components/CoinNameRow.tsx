import Image, { StaticImageData } from "next/image";
import React from "react";

interface CoinNameRowProps {
  name: string;
  icon: StaticImageData;
  clicked: () => void;
}

const CoinNameRow: React.FC<CoinNameRowProps> = ({ name, icon, clicked }) => {
  return (
    <div>
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  );
};

export default CoinNameRow;
