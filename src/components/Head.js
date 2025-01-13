import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults, deleteCacheResults } from "../utils/searchSlice";
import VideoContext from "../utils/VideoContext";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLists, setSearchLists] = useState([]);
  const { setVideos } = useContext(VideoContext);

  const callSearchApi = async (searchList) => {
    setShowSuggestion(false);
    const data = await fetch(YOUTUBE_SEARCH_API + searchList);
    const json = await data.json();
    setSearchQuery(searchList);
    setVideos(json.items);
    console.log(json.items);
  };

  const searchCache = useSelector((store) => store.search);

  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let oldScrollY = 0;

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchLists(searchCache[searchQuery]);
      } else {
        suggestionApi();
      }
    }, 200);
    if (Object.keys(searchCache).length > 10) {
      dispatch(deleteCacheResults(searchCache));
    }
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
      clearTimeout(setTimer);
    };
  }, [searchQuery]);

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      document.activeElement.blur();
      setShowSuggestion(false);
    }
    oldScrollY = window.scrollY;
  };
  // suggestionApi Call
  const suggestionApi = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchLists(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex pl-4 col-span-1">
        <button onClick={handleHamburgerMenu} className="cursor-pointer">
          <img className="w-6" src="/assets/hamburger-menu.svg" alt="menu" />
        </button>
        <button onClick={() => navigate("/")}>
          <img className="w-32" src="/assets/youtube.png" alt="youtubelogo" />
        </button>
      </div>
      <div className="col-span-10 py-5">
        <div>
          <input
            className="pl-4 w-1/2 border focus:outline-none border-gray-400 py-2 pr-2 rounded-l-full"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
          />
          <button
            onClick={() => callSearchApi(searchQuery)}
            className="bg-gray-100 border border-gray-400 px-4 py-2 rounded-r-full"
          >
            🔍
          </button>
          {showSuggestion && (
            <div className="fixed bg-slate-50  w-[36rem] rounded-lg shadow-lg">
              {searchLists.map((searchList) => (
                <button
                  onClick={() => callSearchApi(searchList)}
                  key={searchList}
                  className="flex px-4 w-full py-2 hover:bg-gray-100"
                >
                  🔍
                  <p className="pl-2 ">{searchList}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex col-span-1">
        <img className="w-8" src="/assets/user-icon.svg" alt="userIcon" />
      </div>
    </div>
  );
};

export default Head;
