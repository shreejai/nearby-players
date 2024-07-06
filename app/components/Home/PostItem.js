import React from 'react';
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PostItem = ({post}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg light:bg-gray-800 mx-auto w-full">
      <img className="rounded-t-lg w-full h-[180px] object-cover" src={post.image? post.image : "/placeholder.jpg"} alt="" />
      <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 light:text-white">{post.title}</h5>
          {post.date && <div className='flex items-center text-orange-500 gap-2 mb-2'>
            <HiOutlineCalendarDays className='text-[20px]'/>
            {post.date}
          </div>}
          {post.location && <div className='flex items-center text-blue-500 gap-2 mb-2'>
            <HiOutlineLocationMarker className='text-[20px]'/>
            {post.location}
          </div>}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.desc}</p>
        { post.name &&
        <div className='mb-4 flex items-center gap-2'>
          <img src={post.avatar} width={40} height={40} className='rounded-full'/>
          <div>
            <p className='text-sm font-semibold'>{post.name}</p>
            <p className='text-xs text-gray-500'>{post.email}</p>
          </div>
        </div>
        }
        <div className='flex items-center justify-between gap-2'>
          <a href="#" className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Interested
          </a>
        </div>
        </div>
    </div>
  )
}

export default PostItem