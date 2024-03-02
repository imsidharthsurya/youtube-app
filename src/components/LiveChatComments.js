import React, { useEffect } from 'react'
import ChatComment from './ChatComment'
import { useDispatch,useSelector } from 'react-redux'
import { addMessage } from '../utils/liveChatSlice'
import { generateRandomName,generateRandomSentence } from '../utils/helper'

const LiveChatComments = () => {

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
    <React.Fragment className="flex">
    <div className='mx-2 p-2 bg-slate-100 rounded-lg w-[350px] h-[400px] border border-black overflow-y-scroll flex flex-col-reverse'>
        {
            liveChatMessages.map((chat,index)=>{
                return <ChatComment key={index} name={chat.name} message={chat.message}/>
            })
        }
        
    </div>
    </React.Fragment>
  )
}

export default LiveChatComments