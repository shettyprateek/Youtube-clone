import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat.messages);

  const addLiveChat = () => {
    dispatch(
      addMessage({
        name: "Prateek Shetty",
        message: liveChat + " 🚀🧨",
      })
    );
    setLiveChat("");
  };
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText() + " 🚀🧨",
        })
      );
    }, 1500);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="flex flex-col w-full m-2">
      <div className="p-2 ml-2 h-[550px] overflow-y-scroll flex flex-col-reverse bg-white border border-2-gray-100 w-full rounded-lg">
        {chatList.map((c, index) => (
          <Chat key={index} name={c.name} text={c.message} />
        ))}
      </div>
      <form
        className="flex rounded-lg w-full ml-2 mt-2 p-2 border border-red-200"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="mr-4 focus:outline-none w-full"
          type="text"
          placeholder="Enter the text"
          value={liveChat}
          onChange={(e) => setLiveChat(e.target.value)}
        />
        <button
          onClick={addLiveChat}
          className="bg-green-300 rounded-md py-2 px-4"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
