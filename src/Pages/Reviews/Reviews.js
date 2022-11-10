import React from "react";
import "./Reviews.css";

const Reviews = ({ totalrev, handleDelete }) => {
  let { message, reviewItem, _id } = totalrev;
  return (
    <div className="all-rev">
      <div className="rev">
        <h6>
          Service Name: <span>{reviewItem}</span>
        </h6>
        <p>{message}</p>
      </div>
      <div className="rev-btn">
        <button>edit</button>
        <button onClick={() => handleDelete(_id)}>delete</button>
      </div>
    </div>
  );
};

export default Reviews;
