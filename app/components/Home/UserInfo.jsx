import React from 'react'

function UserInfo({post}) {
  return (
    <>
    <p className='font-bold mb-2'>Posted by:</p>
    <div className='mb-4 flex items-center gap-2'>
      <img src={post.avatar} width={40} height={40} className='rounded-full'/>
      <div>
        <p className='text-sm font-semibold'>{post.name}</p>
        <p className='text-xs text-gray-500'>{post.email}</p>
      </div>
    </div>
    </>
  )
}

export default UserInfo