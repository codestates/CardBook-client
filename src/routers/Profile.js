import React from "react";
import { useHistory } from "react-router-dom";
import "routers/Profile.css";
import axios from "axios";
import userImg from "basicObj/basic_profile_image.png";
import contentImg from "basicObj/contentImg.png";
import { useProfileState, useProfileDispatch } from "context/ProfileContext";

const Profile = ({ location }) => {
  const state = useProfileState();
  const dispatch = useProfileDispatch();

  const history = useHistory();

  const onProfile = () => {
    dispatch({ type: "CHANGE_STATE", payload: !state.status });
    history.push("/public");
  };

  const userinfo = axios.get(
    "https://www.cardbookserver.tk:4000//users/userinfo"
  );
  console.log(userinfo);
  return (
    <div className="profileContainer">
      <div className="profileContainer_left">
        <h1 className="profileTitle" onClick={onProfile}>
          Cardbook
        </h1>
        <div className="profileUserinfo">
          <span>UserInfo</span>
          <span className="profileUserinfoEdit">Edit</span>
        </div>
        <div className="profileText">UserName</div>
        <div className="profileSubText">cardbook{userinfo.email}</div>
        <div className="profileText">Email</div>
        <div className="profileSubText">
          cardbook@cardbook.cb{userinfo.username}
        </div>
        <div className="profileText">Phone</div>
        <div className="profileSubText">Phone{userinfo.phone}</div>
        <div className="profileText">Password</div>
        <div className="passwordChange">change</div>
        <button className="logbtn">Logout</button>
      </div>
      <div className="profileContainer_right">
        <img
          className="profileImg"
          src={userImg}
          alt="basic"
          style={{ height: "150px" }}
        />
        <div className="profileUserinfoRight">
          <span>My List</span>
          <span className="profileUserinfoEditRight">Edit</span>
          <span className="profileUserinfoEditRight">Share</span>
        </div>
        <img className="contentImg" src={contentImg} alt="contentImg" />
      </div>
    </div>
  );
};

export default Profile;
