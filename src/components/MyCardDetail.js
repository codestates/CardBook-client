import React from "react";
import "components/CardDetail.css";
import axios from "axios";

const CardDetail = ({ location }) => {
  console.log(location.state.content);
  return (
    <div className="cardDetail">
      <div className="subTitle">{location.state.content.title}</div>
      <div className="contentBox">
        <img
          className="detailImg"
          src={location.state.content.large_cover_image}
          alt={location.state.content.title}
        />
        <p>contents: {location.state.content.description_full}</p>
      </div>
    </div>
  );
};

export default CardDetail;
