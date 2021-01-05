import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "components/Navigation.css";

const Navigation = ({ onModalOpen, onProfile, isProfile }) => {
  const [search, setSearch] = useState("");

  const history = useHistory();

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav className="nav">
      <h1 id="navTitle" onClick={() => history.push("/public")}>
        CardBook
      </h1>
      <Link id="public" to="/public">
        public
      </Link>
      <span id="navDivider">|</span>
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
      <Link
        id="profile"
        to={{
          pathname: "/profile",
          state: { isProfile: isProfile },
        }}
        onClick={onProfile}
      >
        profile
      </Link>
      <button id="writeBtn" onClick={onModalOpen}>
        Write Card
      </button>
    </nav>
  );
};

export default Navigation;
