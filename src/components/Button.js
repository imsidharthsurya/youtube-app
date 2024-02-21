import React from 'react'


const Button = ({name}) => {
  return (
    <div className='bg-gray-200 py-1 px-3 m-2 rounded-md cursor-pointer'>{name}</div>
  )
}

export default Button