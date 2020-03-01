import React from "react";
import { Html5Entities } from "html-entities";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  const htmlEntities = new Html5Entities();
  return (
    <Grid>
      <Paper elevation={6} style={{ marginBottom: "10px" }}>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => onVideoSelect(video)}
        >
          <img
            style={{ marginRight: "10px" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.default.url}
          />
          <Typography variant="subtitle2" style={{ padding: "10px" }}>
            <strong>{htmlEntities.decode(video.snippet.title)}</strong>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
