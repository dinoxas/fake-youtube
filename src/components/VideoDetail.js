import React, { Fragment } from "react";
import { Html5Entities } from "html-entities";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video.snippet);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const htmlEntities = new Html5Entities();

  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "80%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper style={{ padding: "10px" }}>
        <Typography variant="h5">
          {htmlEntities.decode(video.snippet.title)} -
          {htmlEntities.decode(video.snippet.channelTitle)}
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
