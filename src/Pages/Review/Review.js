import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Review = () => {
  let title = "Shutter Up -Review";
  document.title = title;

  let allreview = useLoaderData();
  console.log(allreview);

  return (
    <div>
      {allreview.map((totalrev) => (
        <Reviews totalrev={totalrev} key={totalrev._id}></Reviews>
      ))}
    </div>
  );
};

export default Review;
