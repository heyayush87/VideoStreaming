import React from "react";

const Comment = React.memo(({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start gap-2 shadow-lg bg-gray-300 rounded-lg p-2 my-2">
      <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
        <img
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="px-1 sm:px-3 flex-1 min-w-0">
        <p className="font-bold text-sm sm:text-base break-words">{name}</p>
        <p className="text-xs sm:text-sm break-words">{text}</p>
      </div>
    </div>
  );
});

export default Comment;