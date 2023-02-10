import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="Picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download Image{" "}
        <a target="_blank" href={data.src.large}>
          <span>Click Here</span>
        </a>
      </p>
    </div>
  );
};

export default Picture;
