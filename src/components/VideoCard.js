import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
