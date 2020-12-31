import React, { useState } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import BaseImage from 'basicObj/basic_profile_image.png'
import axios from 'axios'
import 'styles.css'

// axios.defaults.withCredentials = true;

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const onChange = e => {
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'phone') {
      setPhone(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'username') {
      setUsername(value)
    }
    // console.log(e.target.value)
  }
  const handleSignup = e => {
    axios
      .post('https://www.cardbookserver.tk:4000/users/signup', {
        email,
        password,
        phone,
        username,
      })
      .then(res => {
        history.push('/')
        console.log('OK')
      })
      .catch(err => {
        if (err.response.status === 422) {
          setError('모든 항목은 필수입니다.')
        } else if (err.response.status === 409) {
          setError('중복된 이메일입니다.')
        }
      }, e.preventDefault())
  }

  // https://www.cardbookserver.tk:4000/users/signup
  // https://localhost:4000/users/signup

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container_center">
          <h1 className="signup_Logo" onClick={() => history.push('/')}>
            CardBook
          </h1>
          <img src={BaseImage} alt="base" style={{ height: '150px' }} />
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
          <input
            className="text_Box"
            name="username"
            type="text"
            placeholder="Username"
            onChange={onChange}
          ></input>
          <input
            className="text_Box"
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={onChange}
          ></input>
          <div className="login_error_massage">{error}</div>
          <Link to="/">
            <button
              className="main_signUpbtn"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default withRouter(Signup)
