import React from 'react'

const ChatComment = ({name,message}) => {
  return (
    <div className='flex mt-2'>
        
            <img alt='user-profile' className='w-6 mt-2 self-start' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png'/>
        
       <div className='mt-1'>
            <span className='font-bold mx-2'>{name}</span>
            <span className=''>{message}</span>
        </div>
    </div>
  )
}

export default ChatComment