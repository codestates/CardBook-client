import React, { useEffect, useState } from "react";
import "routers/Public.css";
import PublicCard from "components/PublicCard";
import axios from "axios";

const Public = () => {
  const [movies, setMovies] = useState([]);
  const [contents, setContents] = useState([
    { title: "Public Card", id: 0 },
    { title: "Public Card", id: 1 },
    { title: "Public Card", id: 2 },
    { title: "Public Card", id: 3 },
  ]);

  useEffect(() => {
    const getData = async () => {
      let movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
      setMovies(movies.data.data.movies);
    };
    getData();
  }, []);
  console.log(movies);

  return (
    <>
      <div className="cardContainor">
        {movies.map((content, index) => {
          if (index < 4) {
            return <PublicCard key={content.id} content={content} />;
          } else {
            return console.log(index);
          }
        })}
      </div>
      {/* <div id="ani">
        <div id="animate">animate</div>
      </div> */}
    </>
  );
};

export default Public;
