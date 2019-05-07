import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null
  };
  componentDidMount() {
    this.onSearchSubmit("piano");
  }
  onVideoSelected = video => {
    console.log(video);
    this.setState({ videoSelected: video });
  };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0]
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="ten wide column">
              <VideoDetails video={this.state.videoSelected} />
            </div>
            <div className="six wide column">
              <VideosList
                videoSelected={this.onVideoSelected}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
