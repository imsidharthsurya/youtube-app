import React from 'react'
import { btnData } from '../utils/buttonData'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex ml-12'>
      {
        btnData.map((btn,index)=>{
          return <Button name={btn} key={index}/>
        })
      }
    </div>
  )
}

export default ButtonList