import React from 'react'
import Login from './Login'
import Main from './Main'
import SignUp from './SignUp'
import Mypage from './Mypage'
import Video from './basicObj/Mainloop.mp4'
import Icon from './basicObj/social_login.png'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: true,
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container_left">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="container_right">
          <h1 className="main_title">CardBook</h1>
          <input className="main_ID" type="" placeholder="Email"></input>
          <input className="main_PS" type="" placeholder="Passward"></input>
          <button className="main_loginbtn">Login</button>
          <span className="find-ID-find-PW">find Email / find Passward</span>
          <button className="main_signUpbtn">Sign Up</button>
          <img className="main_icon" src={Icon} />
        </div>
      </div>
    )
  }
}

export default App
