import React from "react";
import "./UserRview.css";

const UserRview = ({ rev }) => {
  let { message, displayName, image } = rev;
  return (
    <div className="comment">
      <div className="user_pic">
        <img src={image} alt="" />
      </div>
      <div className="user_comment">
        <h5>{displayName}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UserRview;
