import React from "react";

const Image = ({ id, url, desc, gridarea }) => {
  return (
    <div className="image" id={gridarea}>
      <img src={url} alt={desc || id}></img>
    </div>
  );
};

export default Image;
