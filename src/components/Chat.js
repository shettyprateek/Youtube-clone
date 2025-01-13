import React from "react";

const Chat = ({ name, text }) => {
  return (
    <div className="flex py-2 border-b-2 border-gray-200">
      <img className="w-6" src="/assets/user-icon.svg" alt="userIcon" />
      <span className="px-2 text-gray-500">{name}</span>
      <span>{text}</span>
    </div>
  );
};

export default Chat;
