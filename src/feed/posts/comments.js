import React from "react";
import { FaCloudUploadAlt, FaTelegramPlane } from "react-icons/fa";
import "./posts.scss";
const Comment = () => {
  return (
    <div className="parent">
      <div className="flex-body-comment">
        <input
          type="text"
          className="form-control comment"
          placeholder="comments"
        />
        <span className="attach">
          <button className="attachment-btn " size="sm">
            <FaCloudUploadAlt title="attach file" />
          </button>
        </span>
        <span className="send">
          <button className="attachment-btn" size="sm">
            <FaTelegramPlane />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Comment;
