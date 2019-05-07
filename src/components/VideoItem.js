import React from "react";
import './VideosItem.css';

const VideoItem = ({ video, videoSelected }) => {
  return (
    <div onClick = {()=> videoSelected(video)} className="video-item item">
      <img alt="video" src={video.snippet.thumbnails.medium.url} />
      <div className="content"><p className="header">{video.snippet.title}</p></div>
    </div>
  );
};

export default VideoItem;
