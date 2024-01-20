import React from 'react'
import { Sidebar } from './Sidebar'
import { MainContainer } from './MainContainer'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div className='flex w-full'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
