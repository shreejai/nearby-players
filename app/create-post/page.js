'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Dashboard from '../components/Dashboard';
import Form from '../components/Form';

const Page = () => {
  const {data:session} = useSession();
  return (
    <div>
      {session ? 
        <div className=''>
          <div className='p-6 mt-8'>
            <h2 className='text-[30px] font-extrabold text-blue-500'>Create Post</h2>
            <p className='mb-4'>Create post and Discover/Invite new Friends and Players</p>
            <Form/>
          </div>
        </div>
      : 
      <div className='p-4 flex flex-col gap-4'>
        <h1>Please log in to create a post</h1>
        <button onClick={()=> signIn("google")} className='border border-black rounded-full px-5 py-2 max-w-fit'>Sign in with Google</button>
      </div>}
    </div>
  )
}

export default Page