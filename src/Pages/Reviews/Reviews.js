import React from "react";
import "./Reviews.css";

const Reviews = ({ totalrev }) => {
  let { message, reviewItem } = totalrev;
  return (
    <div className="all-rev d-flex justify-content-between">
      <div className="rev">
        <h6>
          Service Name: <span>{reviewItem}</span>
        </h6>
        <p>{message}</p>
      </div>
      <div className="rev-btn">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Reviews;
