import React, { useEffect, useState } from 'react'
import ChatComment from './ChatComment'
import { useDispatch,useSelector } from 'react-redux'
import { addMessage } from '../utils/liveChatSlice'
import { generateRandomName,generateRandomSentence } from '../utils/helper'

const LiveChatComments = () => {

    const [myComment,setMyComment]=useState("")
    const liveChatMessages=useSelector((store)=>store.chat.comments)
    const dispatch=useDispatch();
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("polling live chat api data");
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomSentence()
            }))
        },2000)

        return ()=>{
            clearInterval(i);
        }
    },[])

  return (
    <div className="flex flex-col border border-black bg-slate-100 rounded-lg mx-2">
    <div className='p-2 w-[350px] h-[380px] overflow-y-scroll flex flex-col-reverse'>
        {
            liveChatMessages.map((chat,index)=>{
                return <ChatComment key={index} name={chat.name} message={chat.message}/>
            })
        }
        
    </div>
    <form className='my-2 ml-4' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({name:"Sidharth Surya",message:myComment}))
        setMyComment("");

    }}>
        <input type='text' value={myComment} onChange={(e)=>setMyComment(e.target.value)} className='py-1 px-2 w-64 rounded-lg border border-black'/>
        <button className='bg-slate-200 font-semibold rounded-md p-1 ml-4 border border-black'>Send</button>
    </form>
    </div>
  )
}

export default LiveChatComments