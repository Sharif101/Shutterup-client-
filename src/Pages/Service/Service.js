import React from "react";
import Card from "react-bootstrap/Card";
import "./Service.css";

const Service = ({ service }) => {
  let { name, _id, image_url, rataing, details, price } = service;
  return (
    <div>
      <Card>
        <Card.Img className="card-img" variant="top" src={image_url} />
        <Card.Body className="card-cour">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Rataing: {rataing}</Card.Text>
          {/* <Link to={`/courses/${id}`}>
            <button className="enroll-btn">
              Enroll me
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
