import React from "react";
import { Link } from "react-router-dom";

const PublicCard = ({ content }) => {
  console.log(content);
  return (
    <Link
      className="card"
      style={{
        backgroundImage: `url(${content.background_image_original})`,
      }}
      to={{
        pathname: `/public/${content.id}`,
        state: {
          content,
        },
      }}
    >
      <div>{content.title}</div>
    </Link>
  );
};

export default PublicCard;
