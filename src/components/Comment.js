import React from 'react'

const Comment = ({data}) => {
    // console.log(data)
  return (
    <div className='flex mt-4'>
    <div>
        <img alt='user-profile' className='w-8 mt-2' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png'/>
    </div>
    <div className='ml-2'>
        <p className='font-bold'>{data.name}</p>
        <p className='text-sm'>{data.text}</p>
    </div>
    </div>
  )
}

export default Comment