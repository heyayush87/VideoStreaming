import React, { useEffect, useState } from "react";
import { Youtube_Api } from "../utils/constant";
import Card from "./Card";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getvideo = async () => {
    try {
      const response = await fetch(Youtube_Api);
      if (!response.ok) throw new Error(`Response error: ${response.status}`);
      const data = await response.json();

      // ✅ Filter out duplicate videos
      setVideos((prev) => {
        const existingIds = new Set(prev.map((v) => v.id?.videoId || v.id));
        const newVideos = data.items.filter(
          (item) => !existingIds.has(item.id?.videoId || item.id)
        );
        return [...prev, ...newVideos];
      });
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      getvideo();
    }
  };

  useEffect(() => {
    getvideo(); // Initial fetch
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (videos.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={`/watch/${video.id?.videoId || video.id}`}
          key={video.id?.videoId || video.id}
        >
          <Card info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
