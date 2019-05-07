import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video" src={videoSRC} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <div className="ui description">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
