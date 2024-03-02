import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {hideMenu} from "../utils/sideBarSlice"
import {useSearchParams} from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChatComments from './LiveChatComments'

const WatchPage = () => {
  //side bar to control width of the video frame
  const isSideBar=useSelector((store)=>store.app.isMenuOpen)
  
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"))
    const videoId=searchParams.get("v")
    const dispatch=useDispatch()
    useEffect(()=>{
        
        dispatch(hideMenu())
    },[])

  return (
    <div className='w-full'>
      <div className='flex w-full'>
         { isSideBar?<iframe height="400" className='rounded-lg ml-14 w-[650px]' src={"https://www.youtube.com/embed/"+videoId+"?si=JsMkRciZq9HUEETG"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          :<iframe height="400" className='rounded-lg ml-14 w-[700px]' src={"https://www.youtube.com/embed/"+videoId+"?si=JsMkRciZq9HUEETG"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        }
            <LiveChatComments/>
          
      </div>
      <div className='m-5'>
          <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage