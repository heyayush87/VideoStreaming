import React from "react";

const Card = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }

  // Destructure safely
  const { snippet = {}, statistics = {} } = info;
  const {
    channelTitle = "Unknown Channel",
    title = "No Title",
    thumbnails = {},
  } = snippet;
  const thumbnailUrl = thumbnails.medium?.url || thumbnails.default?.url || "";

  return (
    <div className="p-2 m-2 w-full shadow-lg rounded-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300">
      {thumbnailUrl ? (
        <img
          className="rounded-xl w-full object-cover"
          alt={title}
          src={thumbnailUrl}
        />
      ) : (
        <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <ul className="mt-2">
        <li className="font-bold text-sm line-clamp-2">{title}</li>
        <li className="text-gray-600 text-xs">{channelTitle}</li>
        <li className="text-gray-600 text-xs">
          {statistics.viewCount ? `${statistics.viewCount} views` : "No views"}
        </li>
      </ul>
    </div>
  );
};

export default Card;
