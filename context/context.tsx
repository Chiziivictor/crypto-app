import React, { createContext } from "react";

interface ProviderProps {
  children?: React.ReactNode;
}

interface ContextProps {
  getTopTenCoins: () => Promise<any>;
}

export const CoinMarketContext = createContext<ContextProps>({} as any);

export const CoinMarketProvider: React.FC<ProviderProps> = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch("api/getTopTen");
      const data = await res.json();
      return data.data.data;
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <CoinMarketContext.Provider value={{ getTopTenCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};
