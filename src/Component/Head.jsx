import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Api } from "../utils/constant";
import { cacheresult } from "../utils/SearchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchcache = useSelector((store) => store.search) || {};

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggestions(searchcache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      // getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL-", searchQuery);
    try {
      const response = await fetch(Youtube_Search_Api + searchQuery);
      if (!response.ok) throw new Error("Failed to fetch suggestions");

      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(
        cacheresult({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestionText) => {
    setSearchQuery(suggestionText);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      {/* Left Section (Menu + Logo) */}
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="logo"
            src="https://tse1.mm.bing.net/th?id=OIP.7taBhDQHxuIPSdAZ0PRQMQHaHa&pid=Api&P=0&h=180"
          />
        </a>
      </div>

      {/* Center Section (Search Bar + Suggestions) */}
      <div className="col-span-10 text-center relative">
        <div className="flex justify-center items-center">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="bg-slate-300 border border-black px-5 py-2 rounded-r-full">
            🔍
          </button>
        </div>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-[37rem] max-h-60 overflow-y-auto shadow-lg border rounded-lg mt-2 z-50">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(item)}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section (User Icon) */}
      <div className="col-span-1">
        <img
          className="h-10"
          alt="usericon"
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
