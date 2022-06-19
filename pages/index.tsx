import type { NextPage } from "next";
import CoinTable from "../components/CoinTable";
import Header from "../components/Header";
import Example from "../components/HeaderTailwind";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Example />
      <div className="min-h-screen px-4 sm:px-8 md:px-16 overflow-hidden w-full">
        <div className="mt-10" />
        <Trending />
        <div className="mt-20"></div>
        <CoinTable />
      </div>
    </>
  );
};

export default Home;
