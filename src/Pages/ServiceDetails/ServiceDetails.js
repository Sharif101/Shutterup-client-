import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  let details = useLoaderData();
  return (
    <div>
      <Card className="card-bd">
        <Card.Img variant="top" src={details.image_url} />
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
    </div>
  );
};

export default ServiceDetails;
