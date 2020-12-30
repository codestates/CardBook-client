import React, { useState } from "react";
import "routers/My.css";
import MyCard from "components/MyCard";

const My = () => {
  const [contents, setContents] = useState([
    { title: "My Card", id: 0 },
    { title: "My Card", id: 1 },
    { title: "My Card", id: 2 },
    { title: "My Card", id: 3 },
  ]);
  return (
    <>
      <div className="cardContainor">
        {contents.map((content) => {
          return <MyCard key={content.id} content={content} />;
        })}
      </div>
    </>
  );
};

export default My;
