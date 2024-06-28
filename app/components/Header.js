import Image from 'next/image'
import React from 'react'
import { HiArrowLeftOnRectangle, HiOutlinePencilSquare } from "react-icons/hi2";


const  Header = () => {
  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#FF3366]'>
      <img src="/next.svg" alt="nearby players logo" className='w-10 h-10 bg-white' />
      <div className='flex gap-4'>
        <button className='bg-black text-white px-4 py-2 rounded-full'><span className='hidden sm:block'>CREATE POST</span> <HiOutlinePencilSquare className='block sm:hidden text-[20px]'/></button>
        <button className='bg-white text-gray-500 border-[1px] px-4 py-2 rounded-full'><span className='hidden sm:block'>SIGN IN</span><HiArrowLeftOnRectangle className='block sm:hidden text-[20px]'/></button> 
        <Image src="https://www.sjcodes.com/me.png" alt='user image ' width={40} height={40} className='rounded-full border-[1px]'/>
      </div>
    </div>
  )
}

export default Header