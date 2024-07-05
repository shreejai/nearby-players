import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Home/Hero";
import Search from "./components/Home/Search";
import GameList from "./components/Home/GameList";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="px-5 sm:px-7 md:px-10 mt-9"> 
        <Hero/>
        <Search/>
        <GameList/>
        <Dashboard/>
      </div>
      <Footer/>
    </>
  );
}
