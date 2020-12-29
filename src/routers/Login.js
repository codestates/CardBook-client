import React, { useState } from 'react'
import Video from 'basicObj/Mainloop.mp4'
import Icon from 'basicObj/social_login.png'
import { Link, withRouter } from 'react-router-dom'
// import { authService, firebaseInstance } from 'myBase'
// import axios from 'axios'
import 'styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = e => {
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    try {
      // let data
      if (newAccount) {
        // data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        // data = await authService.signInWithEmailAndPassword(email, password)
      }
      // console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="container">
        <div className="container_left">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <form onSubmit={onSubmit}>
          <div className="container_right">
            <h1 className="main_title">CardBook</h1>
            <input
              className="main_ID"
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
            ></input>
            <input
              className="main_PS"
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            ></input>
            <button className="main_loginbtn">Login</button>
            <span className="find-ID-find-PW">find Email / find Passward</span>

            <Link to="/signup">
              <button className="main_signUpbtn">Sign Up</button>
            </Link>

            <img className="main_icon" src={Icon} />
          </div>
        </form>
      </div>
    </>
  )
}

export default withRouter(Login)
