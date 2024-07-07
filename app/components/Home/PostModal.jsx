import React from 'react'
import PostItem from './PostItem'

const PostModal = ({post}) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal rounded-lg">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {post && <PostItem post={post}/>}
              <button className="btn absolute right-2 top-2 bg-red-500 text-white w-5">&#10005;</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default PostModal