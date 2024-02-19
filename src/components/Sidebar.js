import React from 'react'
import {useSelector} from "react-redux"
const Sidebar = () => {
  const showSideNavBar=useSelector((store)=>store.app.isMenuOpen)

  if(!showSideNavBar)return null;
  return (
    <div className='px-8 mb-3 pb-2 shadow-md'>
      <h1>
        Home
      </h1>
      <h1 className='mt-2'>Shorts</h1>
      <h1 className='mt-2'>Videos</h1>
      <h1 className='mt-2'>Live</h1>
      <h1 className='mt-5 font-bold text-lg'>You &gt;</h1>
      <ul>
        <li className='mt-2'>Your Channel</li>
        <li className='mt-2'>History</li>
        <li className='mt-2'>Your Videos</li>
        <li className='mt-2'>Watch Later</li>
        <li className='mt-2'>Show More</li>
      </ul>
      <h1 className='mt-5 font-bold text-lg'>Subscriptions</h1>
      <ul>
        <li className='mt-2'>Learn React</li>
        <li className='mt-2'>T Series</li>
        <li className='mt-2'>NASA</li>
        <li className='mt-2'>BB Ki Vines</li>
      </ul>
      <h1 className='mt-5 font-bold text-lg'>Explore</h1>
      <ul>
        <li className='mt-2'>Trending</li>
        <li className='mt-2'>Shopping</li>
        <li className='mt-2'>Music</li>
        <li className='mt-2'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar