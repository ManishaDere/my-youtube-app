import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData);
  };

  if (!videos?.items?.length) {
    return <div>No Data exist</div>;
  }
  return (
    <div className="flex justify-between flex-wrap">
      {videos?.items?.map((video) => (
        <VideoCard key={video?.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
