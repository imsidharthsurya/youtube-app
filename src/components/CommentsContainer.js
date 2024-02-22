import React,{useState} from 'react'
import { comments } from '../utils/commentsData'
// import Comment from './Comment'
import CommentList from './CommentList'

const CommentsContainer = () => {
    const [commentData,setCommentData]=useState(comments)
  return (
    <div>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <div className='ml-3'>
            <CommentList comments={commentData}/>
        </div>
    </div>
  )
}

export default CommentsContainer