import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import BaseImage from "basicObj/basic_profile_image.png";
import axios from "axios";
import "styles.css";

axios.defaults.withCredentials = true;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPassword(value);
    } else if (name === "password") {
      setPhone(value);
    } else if (name === "username") {
      setUsername(value);
    }
    // console.log(e.target.value)
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !phone || !username) {
      setError("모든 항목은 필수입니다.");
    } else {
      setError("");
    }
    axios
      .post("https://localhost:4000/users/signup", {
        email,
        password,
        phone,
        username,
      })
      .then((res) => console.log("OK"))
      .catch((err) => console.log("ERR"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const history = useHistory();

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container_center">
          <h1 className="signup_Logo" onClick={() => history.push("/")}>
            CardBook
          </h1>
          <img src={BaseImage} alt="base" style={{ height: "150px" }} />
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
              Sign Upnow
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default withRouter(Signup);
