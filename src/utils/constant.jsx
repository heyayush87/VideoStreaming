const apiKey = import.meta.env.VITE_REACT_API_KEY;
export const OFFSET_LIVE_DATA = 50;
export const Youtube_Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;

export const Youtube_Search_Api =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
