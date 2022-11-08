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
            <h3>Study Buzz</h3>
            <p>
              The authority of those who teach is often an obstacle to those who
              want to learn.
            </p>
            <p>― Marcus Tullius Cicero</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic2} alt="Second slide" />

          <Carousel.Caption className="slide-text">
            <h3>Study Buzz</h3>
            <p>You can't study the darkness by flooding it with light.</p>
            <p>― Edward Abbey,</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption className="slide-text">
            <h3>Study Buzz</h3>
            <p>
              The ink of the scholar is more holy than the blood of the martyr.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
