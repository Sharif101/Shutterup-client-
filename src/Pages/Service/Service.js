// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./Service.css";

const Service = ({ service }) => {
  let title = "Shutter Up -Service";
  document.title = title;
  let { name, _id, image_url, details, price } = service;
  return (
    <div>
      <Card>
        <PhotoProvider>
          <PhotoView src={image_url}>
            <Card.Img className="card-img" variant="top" src={image_url} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body className="card-cour">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <small>
              {details.length > 100
                ? `${details.substring(0, 100)}...`
                : details}
            </small>
          </Card.Text>
          <Card.Text>price: {price}</Card.Text>
          <Link to={`/services/${_id}`}>
            <button className="Show_Details">
              Show Details
              {/* <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> */}
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
