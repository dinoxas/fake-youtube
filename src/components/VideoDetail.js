import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "10px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </Fragment>
  );
};

export default VideoDetail;
