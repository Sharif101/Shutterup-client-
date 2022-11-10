import React from "react";
import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";

const LimitService = ({ lim_ser }) => {
  return (
    <div>
      <Card>
        <PhotoProvider>
          <PhotoView src={lim_ser.image_url}>
            <Card.Img
              className="card-img"
              variant="top"
              src={lim_ser.image_url}
            />
          </PhotoView>
        </PhotoProvider>
        <Card.Body className="card-cour">
          <Card.Title>{lim_ser.name}</Card.Title>
          {/* <Card.Text>price: {lim_ser.price}</Card.Text> */}
          <Card.Text>
            <small>
              {lim_ser.details.length > 100
                ? `${lim_ser.details.substring(0, 100)}...`
                : lim_ser.details}
            </small>
          </Card.Text>
          <Card.Text>Rataing: {lim_ser.rataing}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LimitService;
