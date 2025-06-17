import React from "react";

const ChatMessage = ({ name, message, image }) => {
  return (
    <div className="flex items-center gap-2 py-1 px-1 sm:py-2 sm:px-2">
      <img
        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
        src={
          image ||
          "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
        }
        alt="logo"
      />
      <span className="font-bold text-xs sm:text-sm md:text-base truncate max-w-[5rem] sm:max-w-[10rem]">
        {name}
      </span>
      <span className="text-xs sm:text-sm break-words">{message}</span>
    </div>
  );
};

export default ChatMessage;
