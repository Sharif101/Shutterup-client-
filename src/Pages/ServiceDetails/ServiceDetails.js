import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { PhotoProvider, PhotoView } from "react-photo-view";
import toast, { Toaster } from "react-hot-toast";
// import Form from "react-bootstrap/Form";
import "./ServiceDetails.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import UserRview from "../UserReview/UserRview";

const ServiceDetails = () => {
  let details = useLoaderData();
  let { _id, name } = details;

  const { user } = useContext(AuthContext);

  // ---------------------

  let [reviewdata, setReviewdata] = useState([]);

  useEffect(() => {
    fetch(` https://server-theta-henna.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((res) => setReviewdata(res));
  }, [reviewdata]);

  // ----------------------------
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregistered";
    const displayName = user?.displayName || "unregistered";
    const image = user?.photoURL || "unregistered";
    const message = form.message.value;

    const reviews = {
      reviewId: _id,
      reviewItem: name,
      displayName,
      email,
      message,
      image,
    };

    fetch("https://server-theta-henna.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.acknowledged) {
          toast.success("Add your review");
          form.reset();
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div>
      <Card className="card-bd mb-5">
        <Toaster position="top-center" reverseOrder={false} />
        <PhotoProvider>
          <PhotoView src={details.image_url}>
            <Card.Img variant="top" src={details.image_url} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body className="text">
          <div>
            <Card.Title>
              <h2>{details.name}</h2>
            </Card.Title>
            <Card.Text>
              <p>{details.details}</p>
            </Card.Text>
            <Card.Text>
              <p>Price: {details.price}</p>
            </Card.Text>
          </div>
          <div className="card-ic">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
        </Card.Body>
      </Card>

      <div className="add_review">
        <form onSubmit={handleReview}>
          <div>
            <textarea
              placeholder="Review"
              name="message"
              id=""
              cols="50"
              rows="2"
            ></textarea>
          </div>
          <div>
            <button className="add-review-btn" type="submit">
              send
            </button>
          </div>
        </form>
      </div>

      {/* --------------show commnet------------------ */}
      {reviewdata.map((rev) => (
        <UserRview rev={rev} key={rev._id}></UserRview>
      ))}
    </div>
  );
};

export default ServiceDetails;
