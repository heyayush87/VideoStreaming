import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, useParams } from "react-router-dom";
import ComentsContainer from "./ComentsContainer";
import LiveChat from "./LiveChat";
const Watchpage = () => {
  //   const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));
  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5 w-full ">
      <div className="flex">
        <div>
          <iframe
            width="900"
            height="450"
            src={`https://www.youtube.com/embed/${id}?enablejsapi=0&modestbranding=1&rel=0&controls=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <ComentsContainer />
    </div>
  );
};

export default Watchpage;
