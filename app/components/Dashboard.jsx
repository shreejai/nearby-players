"use client";
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const {data: session} = useSession();
  return (
    <div className='p-4'>
      {session ? (
        <>
          <img src={session.user?.image} className="rounded-full"/>
          <h1 className='text-3xl font-bold text-green-500'>
            Welcome back {session.user?.name}
            {/* {JSON.stringify(session)} */}
          </h1>
          <button onClick={()=>signOut()} className='border border-black rounded-xl px-4 py-2 bg-red-400'>Sign out</button>
        </>
      ): (
        <>
          <h1 className='text-3xl text-red-500 font-bold'>You&apos;re not logged in</h1>
          <button onClick={()=> signIn("google")} className='border border-black rounded-xl px-4 py-2'>Sign in with Google</button>
        </>
      )}
    </div>
  )
}

export default Dashboard;