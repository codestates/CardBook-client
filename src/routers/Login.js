import React, { useState } from 'react'
import Video from 'basicObj/Mainloop.mp4'
import Icon from 'basicObj/social_login.png'
import { Link, withRouter } from 'react-router-dom'
import 'styles.css'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [account, setAccount] = useState(false)

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
  }

  const handleSignup = e => {
    if (!email || !password) {
      e.preventDefault()
      setError('모든 항목은 필수입니다.')
    } else {
      setError('')
      setAccount(true)
    }
    axios
      .post('https://localhost:4000/users/login', {
        email,
        password,
      })
      .then(res => console.log('OK'))
      .catch(err => console.log('ERROR'))
  }

  const handleGeust = () => {
    setAccount(true)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container">
          <div className="container_left">
            <video className="videoTag" autoPlay loop muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
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
            <Link to="/home">
              <button className="main_loginbtn" onClick={handleSignup}>
                Login
              </button>
            </Link>
            <Link to="/home">
              <button className="main_Gestloginbtn" onClick={handleGeust}>
                Guest Login
              </button>
            </Link>
            <div className="login_error_massage">{error}</div>
            <span className="find-ID-find-PW">find Email / find Passward</span>

            <Link to="/signup">
              <button className="main_signUpbtn">Sign Up</button>
            </Link>

            <img className="main_icon" src={Icon} alt="base" />
          </div>
        </div>
      </form>
    </>
  )
}

export default withRouter(Login)
