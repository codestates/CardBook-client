import React from "react";
import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";
import Mypage from "./Mypage";
import Video from "./basicObj/Mainloop.mp4";
import Image from "./basicObj/test.png";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="right">
          <h1>CardBook</h1>
          <input type=""></input>
        </div>
      </div>
    );
  }
}

export default App;
