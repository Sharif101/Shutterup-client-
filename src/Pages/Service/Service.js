// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  let { name, _id, image_url, details, price } = service;
  return (
    <div>
      <Card>
        <Card.Img className="card-img" variant="top" src={image_url} />
        <Card.Body className="card-cour">
          <Card.Title>{name}</Card.Title>
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
