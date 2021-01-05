import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import './FindModal.css'
import axios from 'axios'

const FindPasswordModal = ({ isPasswordModalOpen, isOpen }) => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const closeModal = () => {
    isPasswordModalOpen(false)
    setPassword('')
  }
  const setPhoneNum = event => {
    setPhone(event.target.value)
  }
  const setEmailVal = event => {
    setEmail(event.target.value)
  }
  const findPassword = async () => {
    await axios
      .post('https://api.cardbook.tk:4000/users/findpassword', {
        email: email,
        phone: phone,
      })
      .then(data =>
        setPassword(`회원님 계정의 비밀번호는 : ${data.data.password}`)
      )
      .catch(() => setPassword('이메일 또는 전화번호가 일치하지 않습니다.'))
  }
  return (
    <Modal
      className="modal-frame"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="findmodal"
    >
      <div className="findPsTitle">Find Password</div>
      <div className="findPsTextBox">
        <input
          className="input-email"
          type="text"
          placeholder="Email"
          onChange={setEmailVal}
        ></input>
        <input
          className="input-phone"
          type="text"
          placeholder="Phone Number"
          onChange={setPhoneNum}
        ></input>
      </div>
      <div>{password}</div>
      <div>
        <button className="fidnBtn" onClick={findPassword}>
          찾기
        </button>
        <button className="closeBtn" onClick={closeModal}>
          닫기
        </button>
      </div>
    </Modal>
  )
}

export default FindPasswordModal
