import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdSubscript, MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { TbHistory } from "react-icons/tb";
import { BsFire } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { MdQueueMusic } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { useSelector } from 'react-redux';
import { LuPlayCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  return !isMenuOpen ? (
      <div className='w-1/12 px-5 bg-gray-100 py-10 items-center'>
        <div className='flex flex-col justify-center gap-5 items-center'>

        <div className='flex items-center gap-3 py-2 cursor-pointer'><Link className='flex flex-col items-center gap-1' to='/'><AiFillHome className=' text-xl'/><h1 className='text-sm'>Home</h1></Link></div>
        <div className='flex items-center gap-3 py-2 cursor-pointer'><Link className='flex flex-col items-center gap-1' to='/'><SiYoutubeshorts className=' text-xl'/><h1 className='text-sm'>Shorts</h1></Link></div>

        <div className='flex items-center gap-3 py-2 cursor-pointer'><Link className='flex flex-col items-center gap-1' to='/'><MdPodcasts className=' text-xl'/><h1 className='text-sm'>Live</h1></Link></div>

        <div className='flex items-center gap-3 py-2 cursor-pointer'><Link className='flex flex-col items-center gap-1' to='/'><LuPlayCircle className=' text-xl'/><h1 className='text-sm'>You</h1></Link></div>

      </div>
      </div>
  ) :  (
    <div className='w-2/12 bg-gray-100 py-10'>
      <div className='flex flex-col justify-start px-10'>
        <div className='flex items-center gap-3 py-2 cursor-pointer'><Link className='flex gap-3' to='/'><AiFillHome className=' text-xl'/><h1>Home</h1></Link></div>
        <div className='flex items-center py-2'><SiYoutubeshorts className='mr-3 text-xl'/><h1>Shorts</h1></div>
        <div className='flex items-center py-2'>< MdOutlineSubscriptions className='mr-3 text-xl'/><h1>Subscriptions</h1></div>
      </div>
      <div className="border-b-gray-100 border-2 py-1 mt-2"></div>
        <div className='flex flex-col justify-start px-10 my-2'>
          <h1 className='text-lg font-semibold'>You</h1>
          <div className='flex items-center gap-3 py-2'><GrChannel className='mr-3 text-xl'/><h1>Your Channel</h1></div>
          <div className='flex items-center gap-3 py-2'><GoHistory className='mr-3 text-xl'/><h1>History</h1></div>
          <div className='flex items-center gap-3 py-2'><MdOutlineSmartDisplay className='mr-3 text-xl'/><h1>Your vedios</h1></div>
          <div className='flex items-center gap-3 py-2'><TbHistory className='mr-3 text-xl'/><h1>Watch later</h1></div>
      </div>
      <div className="border-b-gray-100 border-2 py-1 mt-2"></div>
      <div className='flex flex-col justify-start px-10 my-2'>
          <h1 className='text-lg font-semibold'>Explore</h1>
          <div className='flex items-center gap-3 py-2'><BsFire className='mr-3 text-xl'/><h1>Trending</h1></div>
          <div className='flex items-center gap-3 py-2'><LuShoppingBag className='mr-3 text-xl'/><h1>Shopping</h1></div>
          <div className='flex items-center gap-3 py-2'><MdQueueMusic className='mr-3 text-xl'/><h1>Music</h1></div>
          <div className='flex items-center gap-3 py-2'><MdSportsEsports className='mr-3 text-xl'/><h1>Gaming</h1></div>
          <div className='flex items-center gap-3 py-2'><MdPodcasts className='mr-3 text-xl'/><h1>Podcast</h1></div>
          <div className='flex items-center gap-3 py-2'><TbHistory className='mr-3 text-xl'/><h1>Fashion & Beauty</h1></div>
      </div>
    </div>
  )
}
