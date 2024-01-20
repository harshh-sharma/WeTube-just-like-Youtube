import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu} from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { searchItems, toggleMenu } from '../utils/slices/appSlice';
import { YOUTUBE_SUGGSETION_API } from '../utils/constants/Api';
import {searchItemsInList} from '../utils/slices/searchSlice'
import { Link } from 'react-router-dom';


export const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery] = useState('');
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestion] = useState(false); 


  const getSearchSuggestion = async () => {
    console.log('Api call',searchQuery);
    const response = await fetch(YOUTUBE_SUGGSETION_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
    console.log(json)
  } 


  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(),200);
    dispatch(searchItemsInList(searchQuery))
    return () => clearTimeout(timer);

  },[searchQuery])

  const handleMenuIcon = () => {
      dispatch(toggleMenu());
  }
  return (
    <div className='flex justify-between shadow-lg py-2 px-10 bg-gray-100 items-center mb-2'>
        <div className='flex gap-2 items-center'>
            <RxHamburgerMenu className='text-3xl cursor-pointer ' onClick={handleMenuIcon}/>
            {/* <FaYoutube className='text-3xl  '/> */}
            <img src='https://icon-library.com/images/icon-youtube/icon-youtube-10.jpg' className='text-3xl h-10'/>
        </div>
        <div className='flex flex-col justify-center'>
        <div className='flex'>
          <form>
            <input placeholder='Search...'type='text' className='w-[32rem] px-4 py-2 rounded-l-3xl border-r-2 border-gray-400' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onBlur={() => setShowSuggestion(false)} onFocus={()=>setShowSuggestion(true)}  />
            <button className='px-5 py-1 rounded-r-3xl bg-white'><IoIosSearch className='text-2xl'/></button>
            </form>
        </div>
         {showSuggestion && <ul className='fixed top-14 bg-white flex flex-col justify-center w-[32rem] rounded-md  gap-2 shadow-xl'>
            {suggestions.map(suggestion => <li key={suggestion} className='flex items-center gap-1 my-2 mx-5'><IoIosSearch/><span className='font-semibold'>{suggestion}</span></li> )}
        </ul>}
        </div>
        <div>
            <FaUserCircle className='text-3xl'/>
        </div>
    </div>
  )
}
