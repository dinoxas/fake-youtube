import React, { Component, Fragment } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import youtube from "./api/youtube";
import { FaReact, FaYoutube } from "react-icons/fa";
import { SearchBar, VideoDetail, VideoList } from "./components";
// import Pagination from "./components/Pagination";
import BasicPagination from "./components/BasicPagination";
import CssBaseline from "@material-ui/core/CssBaseline";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    currentPage: 1,
    postsPerPage: 5
  };

  componentDidMount() {
    this.handleSubmit("Learn JavaScript");
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        key: API_KEY,
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      currentPage: 1
    });
  };

  render() {
    const { videos, selectedVideo, currentPage, postsPerPage } = this.state;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <Fragment>
        <CssBaseline />
        <div
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            top: 0,
            left: 0,
            height: "65px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "100%"
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                float: "left",
                marginTop: "10px",
                marginLeft: "10px"
              }}
            >
              <FaYoutube color="#ff0000" size="24" /> <span>FakeTube</span>
            </Typography>
            <div style={{ float: "right" }}>
              <FaReact color="rgb(0, 216, 255)" size="50" />{" "}
            </div>
          </Container>
        </div>

        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SearchBar
                onFormSubmit={this.handleSubmit}
                currentPage={currentPage}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <VideoDetail video={selectedVideo} />
            </Grid>

            <Grid item md={4} xs={12}>
              <VideoList
                videos={currentPosts}
                onVideoSelect={this.onVideoSelect}
              />

              {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={videos.length}
                paginate={this.paginate}
              /> */}

              <BasicPagination
                postsPerPage={postsPerPage}
                totalPosts={videos.length}
                paginate={this.paginate}
                currentPage={currentPage}
              />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default App;
