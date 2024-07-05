'use client'
import React, { useEffect, useState } from 'react';
import GamesList from '../../../shared/Data'

const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(()=>{
    setGames(GamesList) 
 },[])
  console.log("games:",games);
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4'>
      {games.map((item)=>(
        <div key={item.id} className='flex flex-col items-center text-center cursor-pointer py-2'>
          <img src={item.image} width={45} height={45} className='hover:animate-bounce transition-all duration-150'/> 
          <h2 className='text-[14px]'>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default GameList