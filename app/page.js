import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <>
      <Header/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Dashboard/>
      <Footer/>
    </>
  );
}
