import React from 'react'
import PostItem from './PostItem';

const Posts = ({posts}) => {
  console.log("Posts", posts);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 px-10'>
      {posts.map((item)=>(
        <PostItem key={item} post={item}/>
      ))}
    </div>
  )
}

export default Posts