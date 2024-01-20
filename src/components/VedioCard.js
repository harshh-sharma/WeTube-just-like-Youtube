import React from 'react';
import { LuDot } from "react-icons/lu";import WatchPage from './WatchPage';
import { useDispatch } from 'react-redux';
;

const VedioCard = ({info}) => {
    const {snippet,statistics} = info;
    const {thumbnails,description,channelTitle,title } = snippet;
  return (
    <div className='flex flex-col bg-gray-100 w-[24rem] justify-center hover:scale-110 items-center py-2 px-4 rounded-md shadow-xl h-auto' onClick={() => <WatchPage props = {info} />}>
        <div className='w-full flex justify-center items-center'>
            <img src={thumbnails.medium.url} className='w-full rounded-md'/>
        </div>
        <div className='flex flex-col'>
            <h2 className='font-bold'>{title}</h2>
            <h2 className='font-semibold'>{channelTitle}</h2>
            <div className='flex gap-3'>
                <span>{statistics.viewCount} views</span>
                <span className=''>Streamed 3 days ago</span>
            </div>
        </div>
    </div>
  )
}

export default VedioCard