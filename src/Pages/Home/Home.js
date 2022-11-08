import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assest/mountains-100367_960_720.jpg";
import pic2 from "../../assest/sunrise-1014712_960_720.jpg";
import pic3 from "../../assest/parrot-3601194_960_720.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption className="slide-text">
            <h3>Shutter Up</h3>
            <p>
              If your photos aren’t good enough, then you’re not close enough.
            </p>
            <p>— Robert Capa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic2} alt="Second slide" />

          <Carousel.Caption className="slide-text">
            <h3>Shutter Up</h3>
            <p>
              When words become unclear, I shall focus with photographs. When
              images become inadequate, I shall be content with silence.
            </p>
            <p>— Ansel Adams</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption className="slide-text">
            <h3>Shutter Up</h3>
            <p>
              In photography there is a reality so subtle that it becomes more
              real than reality.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
