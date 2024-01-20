import React, { useEffect, useState } from 'react'
import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/slices/appSlice';
import {useSearchParams} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import Commentcontainer from './Commentcontainer';
import LiveChatContainer from './LiveChatContainer';
import { MdVerified } from "react-icons/md";
const WatchPage = () => {
  const dispatch = useDispatch();
  let data = useSelector(store => store.watch.vedioData);
  console.log('data--',data);

 
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"))
  const filterData = data.filter(data => data.id==searchParams.get('v'));
  // console.log('filterData',filterData[0].snippet);

  useEffect(() => {
    dispatch(closeMenu());
  },[])
  return (
    <div className='pt-2 w-full px-10'>
      <div className='flex w-full h-[500px]'>
            <div className='h-[500px]'>
            <iframe width="900" className='rounded-lg' height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='w-full'>
                <LiveChatContainer/>
            </div>
      </div>
    
      <div className='w-7/12 py-2'>
        <p className='font-bold text-lg pb-2'>{filterData[0].snippet.title}</p>
        <div className='flex justify-between items-center bg-gray-100 py-2 px-4'>
          <div className='flex gap-2 items-center'>
            <div className='flex items-center'>
            <FaUserCircle className='text-xl'/>
            <h1 className='text-xl font-bold text-slate-900 px-3 py-1 rounded-md'>{filterData[0].snippet.channelTitle}</h1>
            <MdVerified/>
            </div>
            <span className='text-lg text-white px-4 py-1 rounded-md font-semibold bg-slate-900'>subscribe</span>
          </div>
            <div className='flex gap-3 items-center my-1'>
              <button className='text-lg text-white px-4 py-1 rounded-md font-semibold bg-slate-900'>Liked</button>
              <button className='text-lg text-white px-4 py-1 rounded-md font-semibold bg-slate-900'>Share</button>
              <button className='text-lg text-white px-4 py-1 rounded-md font-semibold bg-slate-900'>Download</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage