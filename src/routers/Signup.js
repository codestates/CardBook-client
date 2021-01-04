import React, { useEffect, useState } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import BaseImage from 'basicObj/basic_profile_image.png'
import axios from 'axios'
import 'routers/Signup.css'

//  axios.defaults.withCredentials = true;

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [profileimgsrc,setprofileimgsrc] = useState('https://cardbook-images.s3.ap-northeast-2.amazonaws.com/user_profile_images/default_profile_image.png')
  const [disableSumbitButton, setDisableSumbitButton] = useState(true)
  const [signupAgreeLabelActive, setSignupAgreeLabelActive] = useState(false)
  const [signupAgreeAll, setSignupAgreeAll] = useState(false)
  const [signupAgreechk, setsignupAgreechk] = useState({
    signup_agree_item_check_name_01: false,
    signup_agree_item_check_name_02: false,
    signup_agree_item_check_name_03: false,
    signup_agree_item_check_name_04: false
  })

  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()
  }

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
    }
      else if (name === 'username') {
      setUsername(value)
    }
  }

  const postprofileimg = e => {
    const formData = new FormData();
    formData.append('singup_img_upload', e.target.files[0]);
    axios.post('/users/upload',formData,{
      header: { 'content-type': `multipart/form-data; boundary=${formData._boundary}`},
    }).then((res) => {
      setprofileimgsrc(res.data.location);
    })
  }

  const handleSignup = e => {
    axios
      .post('/users/signup', {
        email,
        password,
        phone,
        username,
        profileimgsrc
      })
      .then(res => {
        history.push('/')
        console.log('OK')
      })
      .catch(err => {
        if (err.response.status === 422) {
          //setError('모든 항목은 필수입니다.')
        } else if (err.response.status === 409) {
          //setError('중복된 이메일입니다.')
        }
      })
  }

  // https://www.cardbookserver.tk:4000/users/signup
  // https://localhost:4000/users/signup

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }

  const toogleClass = () => {
    setSignupAgreeLabelActive(!signupAgreeLabelActive);
  }

  const toggleCheck = (inputname) => {
    setsignupAgreechk((prevState) => {
      const newState = { ...prevState };
      newState[inputname] = !prevState[inputname];
      return newState;
    })
  }

  const selectAll = (value) => {
    setSignupAgreeAll(value);
    setsignupAgreechk((prevState) => {
      const newState = { ...prevState };
      for (const inputname in newState) {
        newState[inputname] = value;
      }
      return newState;
    })
  }

  useEffect(() => {
    let allchecked = true;
    for (const inputname in signupAgreechk) {
      if (signupAgreechk[inputname] === false) {
        allchecked = false;
      }
    }
    if (allchecked) {
      setSignupAgreeAll(true);
    } else {
      setSignupAgreeAll(false)
    }
  }, [signupAgreechk])

  useEffect(() => {
    if (email === '' || password === '' || phone === '' || username === '' || passwordCheck === '' || passwordError === true ||
      signupAgreechk["signup_agree_item_check_name_01"] === false || signupAgreechk["signup_agree_item_check_name_02"] === false || signupAgreechk["signup_agree_item_check_name_03"] === false) {
      setDisableSumbitButton(true);
    } else {
      setDisableSumbitButton(false);
    }
  }, [email, password, phone, username, passwordError, passwordCheck, signupAgreechk])

  

  return (
    <div className="containerr">
      <div className="container_narrow">
        <form onSubmit={onSubmit}>
          <div className = "signup_area_logo">
          <h1 className="signup_logo" onClick={() => history.push('/')}>
            CardBook
            </h1>
            </div>
            <form encType="multipart/form-data">
            <div className = "signup_area_img">
          <img className="signup_img" src={profileimgsrc} alt="base" style={{ height: '100px', width: '100px'}} />
          <label htmlFor="input" className="singup_img_uploader_label">사진 선택</label>
          <input type="file" className="singup_img_uploader" name="singup_img_upload" id="input" onChange={postprofileimg} accept="image/jpg,impge/png,image/jpeg,image/gif"></input>
          </div>
          </form>
          <div className="signup_formlist">
            <div className="signup_formlist_item_email">
              <div className="signup_formlist_item_title">
                <strong className ="singup_formlist_item_sub">이메일</strong>
              </div>
              <input
                className="signup_formlist_input"
                name="email"
                type="email"
                placeholder="이메일"
                onChange={onChange}
              ></input>
            </div>
            <div className="signup_formlist_item_password">
              <div className="signup_formlist_item_title">
              <strong className ="singup_formlist_item_sub">비밀번호</strong>
              </div>
              <div className ="singup_password_toggle_area">
              <input
                className="signup_formlist_input"
                name="password"
                type="password"
                placeholder="비밀번호"
                onChange={onChange}
              ></input>
              {/* <span className="signup_password_toggle">보이기</span> */}
              </div>
              {/* <div className ="indicator" style={{indicator}}>
                <span className ="waek"></span>
                <span className ="medium"></span>
                <span className ="strong"></span>
              </div>
              <div className="signup_password_text">비밀번호가 너무 짧습니다.</div> */}
            </div>
            <div className="signup_formlist_item_verifyPassword">
              <div className="signup_formlist_item_title">
              <strong className ="singup_formlist_item_sub">비밀번호 확인</strong>
              </div>
              <input
                className="signup_formlist_input"
                name="verifypassword"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              ></input>
            </div>
            {passwordError && <div className = "signup_verifypassword_error_title">비밀번호가 일치하지 않습니다.</div>}
            <div className="signup_formlist_item_nickname">
              <div className="signup_formlist_item_title">
              <strong className ="singup_formlist_item_sub">닉네임</strong>
              </div>
              <input
                className="signup_formlist_input"
                name="username"
                type="text"
                placeholder="닉네임"
                onChange={onChange}
              ></input>
            </div>
            <div className="signup_formlist_item_phone">
              <div className="signup_formlist_item_title">
              <strong className ="singup_formlist_item_sub">전화번호</strong>
              </div>
              <input
                className="signup_formlist_input"
                name="phone"
                type="text"
                placeholder="전화번호"
                onChange={onChange}
              ></input>
            </div>
            <div className="signup_agree_main_title_area">
              <h1 className="signup_agree_main_title">가입 약관 동의</h1>
            </div>
            <form>
              <div className="signup_agree_section">
                <div className="signup_agree_all">
                  <input className="signup_agree_all_input"
                    id="signup_agree_all"
                    type="checkbox"
                    onClick={(e) => selectAll(e.target.checked)}
                    defaultChecked={signupAgreeAll}
                  ></input>
                  <label
                    htmlFor="signup_agree_all"
                    className={signupAgreeLabelActive ? "signup_agree_label_checked" : "signup_agree_label"}
                    onClick={toogleClass}
                  >
                    모두 동의
                  </label>
                  <p className="signup_agree_dsc_p">모두 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.
                    <em className="signup_agree_dsc_em">선택 항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.</em>
                  </p>
                </div>
                <div className="signup_agree_group">
                  <div className="signup_agree_area">
                    <h3 className="signup_agree_area_title">
                      <span className="signup_agree_title_sub">CardBook 이용약관, 개인정보 수집이용 동의</span>
                    </h3>
                    <ul className="signup_agree_list">
                      <li className="signup_agree_item">
                        <div className="signup_agree_item_title">
                          <span className="signup_agree_item_check">
                            <input
                              id="signup_agree_item_check_01"
                              name="signup_agree_item_check_name_01"
                              className="signup_agree_item_input"
                              type="checkbox"
                              onChange={() => toggleCheck("signup_agree_item_check_name_01")}
                              checked={signupAgreechk["signup_agree_item_check_name_01"]}
                            ></input>
                            <label htmlFor="signup_agree_item_check_01" className="signup_agree_item_label">
                              CardBook 이용약관 동의 (필수)
                            </label>
                          </span>
                          <button data-toggle = "modal"  data-target = "#signup_agree_item_btn01" type="button" className="signup_agree_item_check_btn"></button>
                          <div id = "signup_agree_item_modal01">
                            <div>
                              
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="signup_agree_item">
                        <div className="signup_agree_item_title">
                          <span className="signup_agree_item_check">
                            <input
                              id="signup_agree_item_check_02"
                              name="signup_agree_item_check_name_02"
                              className="signup_agree_item_input"
                              type="checkbox"
                              onChange={() => toggleCheck("signup_agree_item_check_name_02")}
                              checked={signupAgreechk["signup_agree_item_check_name_02"]}
                            ></input>
                            <label htmlFor="signup_agree_item_check_02" className="signup_agree_item_label">
                              CardBook 개인 정보 수집/이용 동의(필수)
                            </label>
                          </span>
                          <button type="button" className="signup_agree_item_check_btn"></button>
                        </div>
                      </li>
                      <li className="signup_agree_item">
                        <div className="signup_agree_item_title">
                          <span className="signup_agree_item_check">
                            <input
                              id="signup_agree_item_check_03"
                              name="signup_agree_item_check_name_03"
                              className="signup_agree_item_input"
                              type="checkbox"
                              onChange={() => toggleCheck("signup_agree_item_check_name_03")}
                              checked={signupAgreechk["signup_agree_item_check_name_03"]}
                            ></input>
                            <label htmlFor="signup_agree_item_check_03" className="signup_agree_item_label">
                              제 3자 정보 제공(필수)
                            </label>
                          </span>
                          <button type="button" className="signup_agree_item_check_btn"></button>
                        </div>
                      </li>
                      <li className="signup_agree_item">
                        <div className="signup_agree_item_title">
                          <span className="signup_agree_item_check">
                            <input
                              id="signup_agree_item_check_04"
                              name="signup_agree_item_check_name_04"
                              className="signup_agree_item_input"
                              type="checkbox"
                              onChange={() => toggleCheck("signup_agree_item_check_name_04")}
                              checked={signupAgreechk["signup_agree_item_check_name_04"]}
                              title="CardBook 광고성 정보 수신 동의(선택)"
                            ></input>
                            <label htmlFor="signup_agree_item_check_04" className="signup_agree_item_label">
                              CardBook 광고성 정보 수신 동의(선택)
                            </label>
                          </span>
                          <button type="button" className="signup_agree_item_check_btn"></button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
            {/* <div className="login_error_massage">{error}</div> */}
            {/* <Link to="/"> */}
            <button
              className="signup_submit"
              type="submit"
              disabled={disableSumbitButton}
              onClick={handleSignup}
            >
              가입하기
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Signup)
