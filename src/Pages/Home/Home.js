import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assest/mountains-100367_960_720.jpg";
import pic2 from "../../assest/sunrise-1014712_960_720.jpg";
import pic3 from "../../assest/parrot-3601194_960_720.jpg";
import bpic from "../../assest/trees-3822149_960_720.jpg";
import bpic1 from "../../assest/mountains-1587287_960_720.jpg";
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

      {/* ------------------------------------------------ */}

      <div className="upload">
        <Row className="justify-content-between">
          <Col lg="3">
            <div className="up-text">
              <h1>Latest Updated</h1>
              <hr />
              <p>
                With over 5 years of experience, numerous workshops and features
                in top wedding publications.
              </p>
              <button>Read This</button>
            </div>
          </Col>
          <Col lg="4">
            <div className="text-pix">
              <div className="img">
                <img src={bpic} alt="" />
              </div>
              <div className="text">
                <h4>Travel</h4>
                <p>Your choice to be photograper is better</p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="text-pix">
              <div className="img">
                <img src={bpic1} alt="" />
              </div>
              <div className="text">
                <h4>EDITORIAL, NIGHT, PHOTOGRAPHY</h4>
                <p>What your friends think about photographers</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
