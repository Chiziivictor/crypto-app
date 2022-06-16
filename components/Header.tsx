import Image from "next/image";
import React from "react";
import Search from "../assets/svg/search.js";
import { ConnectButton } from "web3uikit";

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px] mr-8 text-sm`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navLink: ``,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute top-1 bottom-5 right-0 ring-4`,
  inputContainer: `flex justify-center items-center p-2 rounded bg-[#232637]`,
  input: `bg-transparent outline-none text-white w-70 ml-3 text-sm`,
};

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptocurrencies</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptown</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          <ConnectButton />
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;