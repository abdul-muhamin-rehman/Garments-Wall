import { FaUsers } from "react-icons/fa";
import React, { useState } from "react";
import Comment from "./comments";
import "./posts.scss";

const Posts = () => {
  const [like, setLike] = useState(true);
  const [comment, setComment] = useState(false);
  const ToggleLike = () => {
    setLike({ textflag: !like.textflag });
  };
  const ToggleComment = () => {
    setComment({ commentflag: !comment.commentflag });
  };
  return (
    <div className="flex-container">
      <div className="header">
        <span className="pull-left">
          <a href="#">
            <img className="img-rounded" src="/assets/nisumIcon.jpeg" alt="" />
          </a>
        </span>
        <div className="insideheader">
          <div className="name">Muhammad Arsalan Aslam</div>
          <div className="spaces">
            <div>
              <a href="#">WelcomeSpace</a>
            </div>
            <div className="time">Wed 20 Jul 2:05 PM</div>
            <div className="users">
              <FaUsers />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-body">
        <h1>helloWord</h1>
        <div className="flex-body-footer">
          <div className="post-files clearfix">
            <div className="">
              <img className="postimg" src="/assets/nisumIcon.jpeg" alt="" />
            </div>
          </div>
          <div className="post-controls ">
            <span className="likeLinkContainer">
              <a onClick={ToggleLike}>
                {like.textflag === false ? "unlike" : "like"}
              </a>
            </span>
            <span className="commentContianer">
              <a onClick={ToggleComment}>comment</a>
            </span>
            {comment.commentflag === false ? <Comment /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
