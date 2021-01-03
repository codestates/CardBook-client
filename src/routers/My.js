import React, { useEffect, useState } from "react";
import axios from "axios";
import "routers/My.css";
import MyCard from "components/MyCard";

const My = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
      setContents(movies.data.data.movies);
    };
    getData();
  }, []);
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
