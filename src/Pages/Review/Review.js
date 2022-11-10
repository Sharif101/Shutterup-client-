import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Reviews from "../Reviews/Reviews";

const Review = () => {
  let title = "Shutter Up -Review";
  document.title = title;

  let { user } = useContext(AuthContext);

  // let allreview = useLoaderData();
  // console.log(allreview);

  const [myReviews, setmyReviews] = useState([]);
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = myReviews.filter((rev) => rev._id !== _id);
            setmyReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmyReviews(data));
  }, []);

  return (
    <div>
      {myReviews.map((totalrev) => (
        <Reviews
          totalrev={totalrev}
          key={totalrev._id}
          handleDelete={handleDelete}
        ></Reviews>
      ))}
    </div>
  );
};

export default Review;
