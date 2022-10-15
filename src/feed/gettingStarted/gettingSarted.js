import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import "./gettingStarted.scss";
import { Fragment } from "react";

const GettingStarted = () => {
  return (
    <Fragment>
      <div className="panel-heading">
        <div>
          <strong>Getting</strong> Started
        </div>
        <div className="pointer">
          <BsChevronDown height="0.6em" color="cornflowerblue" />
        </div>
      </div>
      <div className="panel-body">
        <p>
          Get to know your way around the site's most important features with
          the following guides:
        </p>
        <div className="fa-playCircle">
          <ul className="tour-list">
            <li>
              <FaPlayCircle />
              <strong>Guide:</strong> Overview
            </li>
            <li>
              <FaPlayCircle />
              <strong>Guide:</strong> Spaces{" "}
            </li>
            <li>
              <FaPlayCircle />
              <strong>Guide:</strong> User profile{" "}
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default GettingStarted;
