import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/constants/Api';
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';
import WatchPage from './WatchPage';
import { useDispatch } from 'react-redux';
import { addInfo } from '../utils/slices/watchPage';

export const VedioContainer = () => {
  const [vedioData,setVedioData] = useState([]);
  const dispatch = useDispatch();
  const getVedios = async () => {
    const response = await fetch(youtubeApi);
    const jsonData = await response.json();
    console.log("Data",jsonData.items);
    setVedioData(jsonData.items);
    dispatch(addInfo(jsonData.items));
  }

  useEffect(() => {
    getVedios();
  },[]);

  return (
    <div className='py-5 items-center px-10 flex flex-wrap gap-4 justify-center'>
      {vedioData.map(vedio => <Link to={'/watch?v='+ vedio.id }><VedioCard key={vedio.id} info={vedio}/></Link>)}
    </div>
  )
}

// vedio.id