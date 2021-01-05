import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import './FindModal.css'
import axios from 'axios'

const FindEmailModal = ({ isEmailModalOpen, isOpen }) => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const closeModal = () => {
    isEmailModalOpen(false)
    setEmail('')
  }
  const setPhoneNum = event => {
    setPhone(event.target.value)
  }
  const findEmail = async () => {
    await axios
      .post('https://api.cardbook.tk:4000/users/findemail', {
        phone: phone,
      })
      .then(data => setEmail(`당신의 이메일은 : ${data.data.email}`))
      .catch(() => setEmail('일치하는 이메일이 없습니다.'))
  }
  return (
    <Modal
      className="modal-frame"
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      overlayClassName="findmodal"
    >
      <div className="findEmailTitle">Find Email</div>
      <input
        className="input-email"
        type="text"
        placeholder="Phone Number"
        onChange={setPhoneNum}
      ></input>
      <div>{email}</div>
      <div>
        <button className="fidnBtn" onClick={findEmail}>
          찾기
        </button>
        <button className="closeBtn" onClick={closeModal}>
          닫기
        </button>
      </div>
    </Modal>
  )
}

export default FindEmailModal
