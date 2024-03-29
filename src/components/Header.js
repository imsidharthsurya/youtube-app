import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { toggleMenu } from '../utils/sideBarSlice'
import jsonp from 'jsonp';
import {YT_SUGGESTION_URL} from "../utils/constant"
import {cacheResults} from "../utils/searchSlice"
// import {Link} from "react-router-dom"

const Header = () => {

  //to get the cached suggestion from redux store
  const cachedSuggestion=useSelector((store)=>store.search)

  //using redux dispatch to call an action to toggle the sidebar
  //also for caching new suggestions which are not there in redux store
  const dispatch=useDispatch();

  //implement search functionality using debouncing
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestion,setSuggestion]=useState([])
  //b/c in onFocus of i/p we'll show & onblur of i/p we'll hide suggestion
  //initially don't show
  const [showSuggestion,setShowSuggestion]=useState(false);

  // console.log("render with ",suggestion)

  //fn. to getsuggestion calling inside of useEffect
  const getSuggestion=()=>{
     //using jsonp to call the api instead of fetch to tackle cors error
     console.log("inside api call")
    jsonp(YT_SUGGESTION_URL+searchQuery,null,(err,res)=>{
      if (err) {
        console.error('JSONP Error:', err);
        setSuggestion([]);
      } else {
        setSuggestion(res[1]);
        dispatch(cacheResults({[searchQuery]:res[1]}));
        //we're passing searchQuery inside bracke b/c it is
        //var. & if key is var. then use it inside [].
        console.log(res[1])
      }
    })
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      //if searchQuery already there in redux store ie. cache we're implementing
      if(cachedSuggestion[searchQuery]){
        setSuggestion(cachedSuggestion[searchQuery])
      }else{
        getSuggestion()
      }
    },500)
    
    //this is unmount fn. whenever component is getting unmounted
    //since on every key stroke new instance of component will be created
    //so for old instance timer we're clearing
    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  
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
        <input onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type='text' className='border border-gray-400 w-1/2 py-1 px-2 rounded-l-full'/>
        <button className='border border-gray-400 bg-gray-200 py-1 px-3 rounded-r-full'>🔍</button>
        {showSuggestion &&<div className='absolute bg-white w-[393px] ml-1'>
             <ul>
              {
                suggestion.map((suggest)=>{
                  return <li className='shadow-sm mt-0 p-2 pl-5 rounded-md hover:bg-gray-100'>🔍 &nbsp;{suggest}</li>
                })
              }
              
            </ul>

        </div>}
      
      </div>
      <div className='col-span-1'>
        <img alt='user-profile' className='h-8' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png'/>
      </div>
    </div>
  )
}

export default Header