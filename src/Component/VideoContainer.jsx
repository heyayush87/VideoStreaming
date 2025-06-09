import React, { useEffect, useState, useRef } from "react";
import { Youtube_Api } from "../utils/constant";
import Card from "./Card";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const isFetching = useRef(false);

  const getvideo = async () => {
    if (isFetching.current) return;
    isFetching.current = true;
    try {
      let url = Youtube_Api;
      if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response error: ${response.status}`);
      const data = await response.json();
      setVideos((prev) => [...prev, ...data.items]);
      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      isFetching.current = false;
    }
  };

  const handlescroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      getvideo();
    }
  };

  useEffect(() => {
    getvideo(); // Initial fetch
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
    // eslint-disable-next-line
  }, []);

  if (videos.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
      {videos.map((video, idx) => (
        <Link to={`/watch/${video.id}`} key={`${video.id}-${idx}`}>
          <Card info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
