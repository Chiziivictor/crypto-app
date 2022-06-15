import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />
    </div>
  );
};

export default Header;
