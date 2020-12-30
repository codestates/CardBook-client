import React from "react";
import "styles.css";

const Auth = () => {
  return <div>Auth Pages</div>;

  /* constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value })
    console.log(e.target.value)
  }
  handleLogin = () => {
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ errorMessage: '이메일과 비밀번호를 입력하세요' })
    } else {
      axios
        .post('http://localhost:4000/signin', {
          email: this.state.email,
          password: this.state.password,
        })
        .then(res => {
          this.props.handleResponseSuccess()
        })
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
          <input
            className="main_ID"
            type="Email"
            placeholder="Email"
            onChange={this.handleInputValue('Email')}
          ></input>
          <input
            className="main_PS"
            type="Passward"
            placeholder="Passward"
            onChange={this.handleInputValue('Passward')}
          ></input>
          <button className="main_loginbtn" onClick={this.handleLogin}>
            Login
          </button>
          <span className="find-ID-find-PW">find Email / find Passward</span>
          <button className="main_signUpbtn">Sign Up</button>
          <img className="main_icon" src={Icon} />
        </div>
      </div>
    )
  } */
};

export default Auth;
