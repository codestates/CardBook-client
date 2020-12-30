import React from "react";
import { Link } from "react-router-dom";

const MyCard = ({ content }) => {
  return (
    <Link
      className="card"
      to={{
        pathname: `/my/${content.id}`,
        state: {
          content,
        },
      }}
    >
      <div>{content.title}</div>
    </Link>
  );
};

export default MyCard;
