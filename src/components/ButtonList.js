import React from 'react'
import { btnData } from '../utils/buttonData'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex ml-5'>
      {
        btnData.map((btn)=>{
          return <Button name={btn}/>
        })
      }
    </div>
  )
}

export default ButtonList