"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiArrowLeftOnRectangle, HiOutlinePencilSquare } from "react-icons/hi2";


const  Header = () => {
  const {data:session} = useSession();
  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#FF3366]'>
      <Link href={"/"}>
        <img src="/next.svg" alt="nearby players logo" className='w-10 h-10 bg-white' />
      </Link>
      <div className='flex gap-4'>
        <Link href={"/create-post"}>
          <button className='bg-black text-white px-4 py-2 rounded-full'><span className='hidden sm:block'>CREATE POST</span> <HiOutlinePencilSquare className='block sm:hidden text-[20px]'/></button>
        </Link>
        {!session ?
        (<button onClick={()=>signIn()} className='bg-white text-gray-500 border-[1px] px-4 py-2 rounded-full'><span className='hidden sm:block'>SIGN IN</span><HiArrowLeftOnRectangle className='block sm:hidden text-[20px]'/></button> 
        ):(
          <button onClick={()=>signOut()} className='bg-white text-gray-500 border-[1px] px-4 py-2 rounded-full'><span className='hidden sm:block'>SIGN OUT</span><HiArrowLeftOnRectangle className='block sm:hidden text-[20px]'/></button> 
        )
        }

        {session && <Image src={session? session?.user?.image : 'https://www.sjcodes.com/me.png'} alt='user image ' width={40} height={40} className='rounded-full border-[1px]'/>}
      </div>
    </div>
  )
}

export default Header