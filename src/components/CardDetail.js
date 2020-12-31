import React from "react";
import "components/CardDetail.css";
import axios from "axios";

const CardDetail = ({ location }) => {
  const onDeleteCard = async () => {
    await axios
      .post("https://www.cardbookserver.tk:4000/contents/delete", {
        id: location.state.content.id,
      })
      .then((res) => console.log("ok"))
      .catch((err) => console.log("no"));
  };

  return (
    <div className="cardDetail">
      <div className="subTitle">{location.state.content.title}</div>
      <div className="contentBox">
        <img
          className="detailImg"
          src={location.state.content.images}
          alt={location.state.content.title}
        />
        <p>contents: {location.state.content.content}</p>
        <p>contentsId:{location.state.content.id}</p>
      </div>
      <button onClick={onDeleteCard}>Delete</button>
    </div>
  );
};

export default CardDetail;
