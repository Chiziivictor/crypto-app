import React from "react";
import ChevronDown from "../assets/svg/chevronDown";
import Info from "../assets/svg/info";

const styles = {
  textIcon: `flex items-center`,
};

const CoinTableHeader: React.FC = () => {
  return (
    <tbody>
      <tr>
        <th scope="col" className="flex items-center">
          <b># &nbsp;</b>
          <ChevronDown fill={"white"} />
        </th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">24h %</th>
        <th scope="col">7d %</th>
        <th scope="col">
          <div className={styles.textIcon}>
            <p className="mr-2">Market Cap</p>
            <Info />
          </div>
        </th>
        <th scope="col">
          <div className={styles.textIcon}>
            <p className="mr-2">Volume</p>
            <Info />
          </div>
        </th>
        <th scope="col">
          <div className={styles.textIcon}>
            <p className="mr-2">Circulating Supply</p>
            <Info />
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default CoinTableHeader;
