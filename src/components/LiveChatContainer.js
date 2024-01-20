import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/Store/Store";
import { addNewChat } from "../utils/slices/chatSlice";
import makeRandomString, { randomNameGenerator } from "../helper/helper";
import randomString from "../helper/helper";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.listOfChats);
  console.log("Chat", chatData);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addNewChat({
          name: randomNameGenerator(),
          message: randomString(),
        })
      );
    },200);

    return () => clearInterval(timer);
  });

  if (chatData === undefined) return <h1>Live chat</h1>;
  return (
    <div className="mx-2 py-2 ">
      <div className="w-full h-[450px] bg-gray-100 rounded-md  flex flex-col-reverse overflow-y-scroll">
        <div className="">
          {chatData.map((chat, index) => (
            <LiveChat key={index} chatData={chat} />
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addNewChat({
            name:'Harsh sharma',
            message:liveMessage
          }));
          setLiveMessage("");
        }}
      >
        <div className="w-full h-[100px]">
          <input
            type="text"
            placeholder="Enter your chat"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-slate-200"
          />
        </div>
      </form>
    </div>
  );
};

export default LiveChatContainer;
