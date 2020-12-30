import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "components/Navigation.css";

const Navigation = ({ onModalOpen }) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setSearch(event.target.value);
  };
  /* const onChangeTextColor = (event) => {
    let publicEl = document.querySelector("#public");
    let myEl = document.querySelector("#my");
    console.log(event);
    if (event.target.innerText === "public") {
    } else if (event.target.innerText === "my") {
    }
  }; */
  return (
    <nav className="nav">
      <h1 onClick={() => history.push("/public")}>CardBook</h1>
      <Link id="public" to="/public">
        public
      </Link>
      <span>|</span>
      <Link id="my" to="/my">
        my
      </Link>
      <input
        id="search"
        placeholder="검색어를 입력하세요"
        type="text"
        onChange={onChange}
      />
      <input id="searchSubmit" type="submit" value="search" />
      <Link id="profile" to="/profile">
        profile
      </Link>
      <button onClick={onModalOpen}>Write Card</button>
    </nav>
  );
};

export default Navigation;
