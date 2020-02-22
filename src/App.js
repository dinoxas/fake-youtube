import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import youtube from "./api/youtube";
import { FaYoutube } from "react-icons/fa";
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("Eric Cantona");
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBC80Sl0cbQHdpFQ0yT-iT6AkhxJl9nD0g",
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <Grid justify="center" container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              Fake Youtube with React <FaYoutube color="#c00" size="50" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>

          <Grid item md={8} xs={12}>
            <VideoDetail video={selectedVideo} />
          </Grid>

          <Grid item md={4} xs={12}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
