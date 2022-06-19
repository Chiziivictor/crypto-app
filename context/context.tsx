import React, { createContext } from "react";

interface ProviderProps {
  children?: React.ReactNode;
}

interface ContextProps {
  getTopTenCoins: () => Promise<any>;
  getTrending: () => Promise<any>;
}

export const CoinMarketContext = createContext<ContextProps>({} as any);

export const CoinMarketProvider: React.FC<ProviderProps> = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch("api/getTopTen");
      const data = await res.json();

      return data.data;
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  const getTrending = async () => {
    try {
      const res = await fetch(`api/getTrending`);
      const data = await res.json();

      console.log(data.data.coins);

      return data.data.coins;
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <CoinMarketContext.Provider value={{ getTrending, getTopTenCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};
