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
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      // Direct fetch without proxy
      const finalUrl = Youtube_Search_Api + encodeURIComponent(searchQuery);
      const response = await fetch(finalUrl);
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = await response.json();
      // Defensive: ensure suggestions is always an array
      const arr = Array.isArray(data[1]) ? data[1] : [];
      setSuggestions(arr);
      dispatch(
        cacheresult({
          [searchQuery]: arr,
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      setSuggestions([]);
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
    <div className="grid grid-cols-12 gap-2 p-2 m-2 shadow-lg items-center">
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center col-span-3 sm:col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 sm:h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/" className="ml-2">
          <img
            className="h-8 sm:h-10"
            alt="logo"
            src="https://tse1.mm.bing.net/th?id=OIP.7taBhDQHxuIPSdAZ0PRQMQHaHa&pid=Api&P=0&h=180"
          />
        </a>
      </div>

      {/* Center Section (Search Bar + Suggestions) */}
      <div className="col-span-7 sm:col-span-8 text-center relative">
        <div className="flex justify-center items-center">
          <input
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border border-gray-400 p-2 rounded-l-full text-sm sm:text-base"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search"
          />
          <button className="bg-slate-300 border border-black px-3 sm:px-5 py-2 rounded-r-full text-sm sm:text-base">
            🔍
          </button>
        </div>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-full sm:w-[30rem] md:w-[37rem] max-h-60 overflow-y-auto shadow-lg border rounded-lg mt-2 z-50">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 shadow-sm hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
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
      <div className="flex justify-end items-center col-span-2 sm:col-span-2">
        <img
          className="h-8 sm:h-10"
          alt="usericon"
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
