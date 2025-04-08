import React from "react";

const ChatMessage = ({ name, title }) => {
  return (
    <div className="flex items-center">
      <img
        className=" h-4 w-4"
        src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
        alt="logo"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{title}</span>
    </div>
  );
};

export default ChatMessage;
