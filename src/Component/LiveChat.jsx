import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import {
  generateRandomCompliment,
  generateRandomId,
  generateRandomName,
} from "../utils/Helper";
const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
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
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="w-full ml-2 p-4 h-[450px] border border-black bg-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatmessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className=" p-2 m-2 w-full  border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "YOU",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-3/4"
          type="text"
          placeholder="type comment"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="w-1/4 border border-black bg-green-300">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
