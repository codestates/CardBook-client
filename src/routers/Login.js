import React, { useState } from 'react'
import Video from 'basicObj/Mainloop.mp4'
import Icon from 'basicObj/social_login.png'
// import GitLogin from 'routers/GitLogin'
import { Link, withRouter, useHistory } from 'react-router-dom'
import 'styles.css'
import axios from 'axios'

const Login = ({ onLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

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

  const handleSignup = async e => {
    await axios
      .post('https://www.cardbookserver.tk:4000/users/login', {
        email,
        password,
      })
      .then(res => {
        history.push('/public')
        onLoggedIn()
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 400) {
          setError('이메일과 비밀번호 모두 입력하세요.')
        } else if (err.response.status === 404) {
          setError('이메일 또는 비밀번호가 일치하지 않습니다.')
        }
      }, e.preventDefault())
  }

  const handleGeust = () => {
    onLoggedIn()
  }
  const socialLoginHandler = () =>{
    window.location.assign('https://github.com/login/oauth/authorize?client_id=2a260a1d9051b097dc5b')
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
              className="text_Box"
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
            ></input>
            <input
              className="text_Box"
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            ></input>
            {/* <Link to="/public"> */}
            <button className="main_loginbtn" onClick={handleSignup}>
              Login
            </button>
            {/* </Link> */}
            {/* <Link to="/public"> */}
            <button className="main_Gestloginbtn" onClick={handleGeust}>
              Guest Login
            </button>
            {/* </Link> */}
            <div className="login_error_massage">{error}</div>
            <span className="find-ID-find-PW">find Email / find Passward</span>
            <Link to="/signup">
              <button className="main_signUpbtn">Sign Up</button>
            </Link>

            <img className="main_icon" src={Icon} alt="base" onClick={socialLoginHandler}/>
          </div>
        </div>
      </form>
    </>
  )
}

export default withRouter(Login)
