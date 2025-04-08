import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api Polling");
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full ml-2 p-4 h-[450px] border border-black bg-slate-300 rounded-lg">
      <ChatMessage name="Ayush" title="Making Api polling" />
    </div>
  );
};

export default LiveChat;
