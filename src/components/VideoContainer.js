import React, { useEffect, useContext } from "react";
import VideoCard, { RedBorderVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoContext from "../utils/VideoContext";

const VideoContainer = () => {
  const { videos, setVideos } = useContext(VideoContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos.length > 0) return <p>Loading.....</p>;
  return (
    <div className="flex flex-wrap m-1">
      <RedBorderVideoCard info={videos[15]} />
      {videos.map((video) => {
        console.log(video);
        return (
          <Link
            key={video.id}
            to={
              "/watch?v=" +
              (typeof video.id === "string" ? video.id : video.id.videoId)
            }
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
