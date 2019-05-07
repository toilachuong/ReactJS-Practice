import React from "react";
import VideoItem from "./VideoItem";

class VideosList extends React.Component {
  renderList = () => {
    return this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          videoSelected={this.props.videoSelected}
          video={video}
        />
      );
    });
  };
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
export default VideosList;
