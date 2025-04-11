import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import {
  generateRandomCompliment,
  generateRandomId,
  generateRandomName,
} from "../utils/Helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomCompliment(),
        })
      );
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full ml-2 p-4 h-[450px] border border-black bg-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatmessage.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
