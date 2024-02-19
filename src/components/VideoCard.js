import React from 'react'
import { useSelector } from 'react-redux'
const VideoCard = ({videoInfo}) => {
    // console.log(videoInfo)
    // console.log(videoInfo.snippet.thumbnails.medium.url);
    const showMenu=useSelector((store)=>store.app.isMenuOpen)
  return (
    (showMenu)?
    <div className='w-80 p-2 m-2 ml-3'>
       <img className='rounded-lg' alt={videoInfo.snippet.title} src={videoInfo.snippet.thumbnails.medium.url}/>
       <p className='font-bold'>{videoInfo.snippet.title}</p>
       <p>{videoInfo.snippet.channelTitle}</p>
       <p>{videoInfo.statistics.viewCount} Views</p>
    </div>:<div className='w-72 p-2 m-2'>
       <img className='rounded-lg' alt={videoInfo.snippet.title} src={videoInfo.snippet.thumbnails.medium.url}/>
       <p className='font-bold'>{videoInfo.snippet.title}</p>
       <p>{videoInfo.snippet.channelTitle}</p>
       <p>{videoInfo.statistics.viewCount} Views</p>
    </div>

  )
}

export default VideoCard