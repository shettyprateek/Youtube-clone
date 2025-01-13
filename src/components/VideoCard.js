import React from "react";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="mx-1 p-2 w-72 hover:bg-gray-100">
      <img src={thumbnails.medium.url} alt="" />
      <div className="p-1">
        <p className="font-semibold">{title}</p>
        <p className="py-2">{channelTitle}</p>
        {/* <p className="text-gray-500">{statistics.viewCount} views</p> */}
      </div>
    </div>
  );
};

export const RedBorderVideoCard = ({ info }) => {
  return (
    <div className="border border-red-200">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
