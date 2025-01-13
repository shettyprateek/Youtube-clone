import React from "react";
import { useSearchParams } from "react-router-dom";
import { dismissMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  dispatch(dismissMenu());
  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col p-2 w-full">
      <div class="flex">
        <div className="w-full">
          <iframe
            width="1100"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <LiveChat />
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
