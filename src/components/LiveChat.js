import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addNewChat } from "../utils/slices/chatSlice";
import makeRandomString, { randomImageGenerator } from "../helper/helper";

const LiveChat = ({chatData}) => {
  
  return (
    <div className="flex gap-3 items-center my-1 pl-5 py-1">
      <div className="flex items-center gap-3">
        <img src={randomImageGenerator()} className="h-[40px] w-[40px] rounded-full"/>
        <h2 className="font-bold">{chatData.name}</h2>
      </div>
      <div className="flex items-center">
        <p className="font-semibold">{chatData.message}</p>
      </div>
    </div>
  );
};

export default LiveChat;
