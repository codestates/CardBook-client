import React, { useState } from 'react'
import Video from 'basicObj/Mainloop.mp4'
import Icon from 'basicObj/social_login.png'
import { Link, withRouter, useHistory, Switch } from 'react-router-dom'
import EmailModal from '../components/FindEmailModal'
import PasswordModal from '../components/FindPasswordModal'
import 'styles.css'
import axios from 'axios'

const Login = ({ onLoggedIn }) => {
  const [emailModalIsOpen, setEmailModal] = useState(false);
  const [passwordModalIsOpen, setPasswordModal]  = useState(false)
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
  const isEmailModalOpen = (e)=>{
    setEmailModal(e);    
  }  
  const isPasswordModalOpen = (e)=>{
    setPasswordModal(e);
  }
  const onSubmit = async e => {
    e.preventDefault()
  }

  const handleSignup = async e => {
    await axios
      .post('https://api.cardbook.tk:4000/users/login', {
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

  return (
    <>
      
      {<EmailModal isOpen={emailModalIsOpen} isEmailModalOpen={isEmailModalOpen}/>}
      {<PasswordModal isOpen={passwordModalIsOpen} isPasswordModalOpen={isPasswordModalOpen}/>}
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
            <Link to="/public">
              <button className="main_loginbtn" onClick={handleSignup}>
                Login
              </button>
            </Link>
            <Link to="/public">
              <button className="main_Gestloginbtn" onClick={handleGeust}>
                Guest Login
              </button>
            </Link>
            <div className="login_error_massage">{error}</div>
            <span className="find-ID-find-PW"><span onClick={()=>isEmailModalOpen(true)}>Find Email</span> / <span onClick={()=>isPasswordModalOpen(true)}>Find Passward</span></span>

            <Link to="/signup">
              <button className="main_signUpbtn">Sign Up</button>
            </Link>
            
            <a href="https://github.com/login/oauth/authorize?client_id=f5b68abafe3a2adeabc7"><img className="main_icon" src={Icon} alt="base" /></a>
          </div>
        </div>
      </form>    
    </>
  )
}

export default withRouter(Login)
