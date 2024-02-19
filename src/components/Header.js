import React from 'react'
import {useDispatch} from "react-redux"
import { toggleMenu } from '../utils/sideBarSlice'
// import {Link} from "react-router-dom"

const Header = () => {
  const dispatch=useDispatch();
  function handleClick(){
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col m-2 p-5'>
      <div className='flex col-span-1'>
        <img alt="menu" onClick={()=>{handleClick()}} className='h-8 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'/>
        <img alt='yt-logo' className='h-7 ml-6 cursor-pointer' src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"/>
      </div>
      <div className='col-span-10 ml-24'>
        <input placeholder='Search' type='text' className='border border-gray-400 w-1/2 py-1 px-2 rounded-l-full'/>
        <button className='border border-gray-400 bg-gray-200 py-1 px-3 rounded-r-full'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img alt='user-profile' className='h-8' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png'/>
      </div>
    </div>
  )
}

export default Header