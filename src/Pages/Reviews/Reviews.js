import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/updatereviews/${_id}`}>
          {" "}
          <button>edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)}>delete</button>
      </div>
    </div>
  );
};

export default Reviews;
