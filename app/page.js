'use client';
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Home/Hero";
import Search from "./components/Home/Search";
import GameList from "./components/Home/GameList";
import Posts from "./components/Home/Posts";
import app from '../shared/FirebaseConfig';
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

export default function Home() {
  // Initialize Firebase
  const db = getFirestore(app);

  useEffect(()=>{
    getPost();
  },[])

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }
  return (
    <>
      <Header/>
      <div className="px-5 sm:px-7 md:px-10 mt-9"> 
        <Hero/>
        <Search/>
        <GameList/>
        <Posts/>
        <Dashboard/>
      </div>
      <Footer/>
    </>
  );
}
