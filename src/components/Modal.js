import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "components/Modal.css";
import axios from "axios";

const Modal = ({ onModalOpen }) => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let history = useHistory();

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onPostCard = () => {
    axios
      .post("https://www.cardbookserver.tk:4000/contents/write", {
        subclassId: 1,
        content: content,
        title: title,
        userId: 1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    onModalOpen();
    // history.push("/my");
    history.push("/public");
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
