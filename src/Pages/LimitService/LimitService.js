import React from "react";
import Card from "react-bootstrap/Card";

const LimitService = ({ lim_ser }) => {
  return (
    <div>
      <Card>
        <Card.Img className="card-img" variant="top" src={lim_ser.image_url} />
        <Card.Body className="card-cour">
          <Card.Title>{lim_ser.name}</Card.Title>
          {/* <Card.Text>price: {lim_ser.price}</Card.Text> */}
          <Card.Text>Rataing: {lim_ser.rataing}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LimitService;
