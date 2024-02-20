import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard'
import {YT_URL} from "../utils/constant"
import {Link} from "react-router-dom"
const VideoContainer = () => {
  const[videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(YT_URL);
    const json=await data.json();
    setVideos(json.items)
    // console.log(json.items)
  }
  if(videos.length===0)return <h1>Loading...</h1>
  return (
    <div className='mt-6 flex flex-wrap ml-8'>
      {
        videos.map((video)=>{
          return <Link to={"/watch?v="+video.id}  key={video.id}> <VideoCard videoInfo={video}/></Link>
        })
      }
    </div>
  )
}

export default VideoContainer