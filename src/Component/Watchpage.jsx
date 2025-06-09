import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams } from "react-router-dom";
import ComentsContainer from "./ComentsContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="px-2 sm:px-5 w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[900px] flex-shrink-0">
          <div className="relative pb-[56.25%] h-0 lg:pb-0 lg:h-auto">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg lg:static lg:w-[900px] lg:h-[450px]"
              src={`https://www.youtube.com/embed/${id}?enablejsapi=0&modestbranding=1&rel=0&controls=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <LiveChat />
        </div>
      </div>
      <ComentsContainer />
    </div>
  );
};

export default Watchpage;
