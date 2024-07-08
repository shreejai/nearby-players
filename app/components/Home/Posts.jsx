import React, { useState } from 'react'
import PostItem from './PostItem';
import PostModal from './PostModal';

const Posts = ({posts}) => {
  const [post, setPost] = useState();
  console.log("Posts", posts);
  return (
    <>
    <PostModal post={post}/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 px-10'>
      {posts.map((item)=>(
        <div key={item} onClick={
          ()=>{document.getElementById('my_modal_1').showModal(); setPost(item)}}>
          <PostItem post={item} modal={true}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Posts