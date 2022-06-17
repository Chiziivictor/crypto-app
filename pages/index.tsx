import type { NextPage } from "next";
import CoinTable from "../components/CoinTable";
import Header from "../components/Header";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      <Trending />
      <div className="mt-20"></div>
      <CoinTable />
    </div>
  );
};

export default Home;
