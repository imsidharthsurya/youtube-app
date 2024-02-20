import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {hideMenu} from "../utils/sideBarSlice"
import {useSearchParams} from "react-router-dom"

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"))
    const videoId=searchParams.get("v")
    const dispatch=useDispatch()
    useEffect(()=>{
        
        dispatch(hideMenu())
    },[])

  return (
    <div>
        <iframe width="700" height="400" className='rounded-lg ml-14' src={"https://www.youtube.com/embed/"+videoId+"?si=JsMkRciZq9HUEETG"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage