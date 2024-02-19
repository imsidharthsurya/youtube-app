import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard'
import {YT_URL} from "../utils/constant"
const VideoContainer = () => {
  const[videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(YT_URL);
    const json=await data.json();
    setVideos(json.items)
    console.log(json.items)
  }
  if(videos.length===0)return <h1>Loading...</h1>
  return (
    <div className='mt-6 flex flex-wrap'>
      {
        videos.map((video)=>{
          return <VideoCard key={video.id} videoInfo={video}/>
        })
      }
      <VideoCard videoInfo={videos[5]}/>
    </div>
  )
}

export default VideoContainer