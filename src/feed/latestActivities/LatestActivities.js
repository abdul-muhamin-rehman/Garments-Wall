import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Fragment } from "react";
import "./latestActivities.scss";

const LatestActivities = () => {
  return (
    <Fragment>
      <div className="panel-heading">
        <div>
          <strong>Latest</strong> activities
        </div>
        <div className="pointer">
          <BsChevronDown height="0.6em" color="cornflowerblue" />
        </div>
      </div>
      <div className="panel-body">
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Finally
            Done.".
          </div>
        </div>
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Done.".
          </div>
        </div>
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Between
            love and madness lies obsession."
          </div>
        </div>
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Finally
            Done.".
          </div>
        </div>
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Finally
            Done.".
          </div>
        </div>
        <div className="activity-content">
          <div className="fa-user">
            <FaUser />
          </div>
          <div className="content">
            <strong>Muhammad Arslan Aslam</strong> created a new post "Finally
            Done.".
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestActivities;
