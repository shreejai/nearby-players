'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Dashboard from '../components/Dashboard';

const Page = () => {
  const {data:session} = useSession();
  return (
    <div>
      {session ? 
      <Dashboard/> 
      : 
      <div className='p-4 flex flex-col gap-4'>
        <h1>Please log in to create a post</h1>
        <button onClick={()=> signIn("google")} className='border border-black rounded-full px-5 py-2 max-w-fit'>Sign in with Google</button>
      </div>}
    </div>
  )
}

export default Page