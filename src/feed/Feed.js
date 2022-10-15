import React from "react";
import GettingStarted from "./gettingStarted/gettingSarted";
import LatestActivities from "./latestActivities/LatestActivities";
import Posts from "./posts/Posts";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="wall">
      <div className="container">
        <div className="row">
          <div className=" post-container col-lg-8 col-md-8 col-sm-6">
            <div className="card">
              <div className="card-body">
                <Posts />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <GettingStarted />
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <LatestActivities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
