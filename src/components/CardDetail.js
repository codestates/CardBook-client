import React from "react";
import "components/CardDetail.css";
import axios from "axios";

const CardDetail = ({ location }) => {
  const onDeleteCard = async () => {
    try {
      await axios.post("https://api.cardbook.tk:4000/contents/delete", {
        id: location.state.content.id,
      });
    } catch (err) {
      console.log(err);
    }
    window.history.back();
  };

  return (
    <div className="cardDetail">
      <div className="subTitle">{location.state.content.title}</div>
      <div className="contentBox">
        {location.state.content.images && (
          <img
            className="detailImg"
            src={location.state.content.images}
            alt={location.state.content.title}
          />
        )}

        <p>{location.state.content.content}</p>
      </div>
      <button onClick={onDeleteCard}>Delete</button>
    </div>
  );
};

export default CardDetail;
