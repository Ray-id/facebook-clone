import React from "react";
import "./story.css";
import { Avatar } from "@mui/material";

function Story({ image, title, url }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={url} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
