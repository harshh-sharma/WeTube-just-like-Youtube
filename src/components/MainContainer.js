import React from 'react'
import { ButtonList } from './ButtonList'
import { VedioContainer } from './VedioContainer'

export const MainContainer = () => {
  
  return (
    <div className='flex flex-col '>
      <ButtonList/>
      <VedioContainer/>
    </div>
  )
}
