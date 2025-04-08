import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, useParams } from "react-router-dom";
import ComentsContainer from "./ComentsContainer";
const Watchpage = () => {
  //   const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="900"
        height="450"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <ComentsContainer />
    </div>
  );
};

export default Watchpage;
