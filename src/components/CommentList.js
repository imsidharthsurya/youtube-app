import React from 'react'
import Comment from './Comment'
//it will take comments & will show it
const CommentList = ({comments}) => {
  return (
    
    comments.map((comment,index)=>{
        return <div key={index}>
            <Comment data={comment}/>
            <div className='ml-5'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    })
    
  )
}

export default CommentList