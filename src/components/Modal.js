import React, { useState, useRef } from "react";
import "components/Modal.css";
import axios from "axios";

const Modal = ({ onModalOpen }) => {
  axios.get("http://localhost:4000");
  const titleRef = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    console.log(event.target.value);
    setContent(event.target.value);
  };

  const onPostCard = () => {
    console.log(title, content);
  };
  return (
    <div>
      <div id="writeBg">
        <div id="writeBox">
          <h1>Write Card</h1>
          <input
            id="titleText"
            ref={titleRef}
            type="text"
            placeholder="title"
            onChange={onTitleChange}
          />
          <textarea
            id="contentText"
            placeholder="content"
            onChange={onContentChange}
          />
          <div id="buttons">
            <button onClick={onPostCard}>post</button>
            <button onClick={onModalOpen}>close</button>
          </div>
        </div>
      </div>
      <div id="modal"></div>
    </div>
  );
};

export default Modal;
