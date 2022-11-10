import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assest/mountains-100367_960_720.jpg";
import pic2 from "../../assest/sunrise-1014712_960_720.jpg";
import pic3 from "../../assest/parrot-3601194_960_720.jpg";
import bpic from "../../assest/trees-3822149_960_720.jpg";
import bpic1 from "../../assest/mountains-1587287_960_720.jpg";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import LimitService from "../LimitService/LimitService";

const Home = () => {
  let title = "Shutter Up -Home";
  document.title = title;
  let limit_service = useLoaderData();
  console.log(limit_service);
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

      {/* -------------------------------------------- */}

      {/* <h1>{limit_service[0].name}</h1> */}
      <div className="limit">
        <h2>Here is some service</h2>
        <hr />
        <div className="limit_service">
          {limit_service.map((lim_ser) => (
            <LimitService lim_ser={lim_ser} key={lim_ser._id}></LimitService>
          ))}
        </div>
        <div className="limit-btn-showall">
          <Link to="/services">
            <button>Show All</button>
          </Link>
        </div>
      </div>
      {/* ----------------------------------- */}

      <div className="ser">
        <h2>Types of Photography</h2>
        <hr />
        <div className="services">
          <div className="single-srvice">
            <h5>Landscape</h5>
          </div>
          <div className="single-srvice">
            <h5>Wildlife</h5>
          </div>
          <div className="single-srvice">
            <h5>Macro</h5>
          </div>
          <div className="single-srvice">
            <h5>Underwater</h5>
          </div>
          <div className="single-srvice">
            <h5>Astrophotography</h5>
          </div>
          <div className="single-srvice">
            <h5>Aerial Photography</h5>
          </div>
          <div className="single-srvice">
            <h5>Scientific</h5>
          </div>
          <div className="single-srvice">
            <h5>Portraits</h5>
          </div>
        </div>
        <div className="ser-text">
          <p>
            On one hand, it’s good to know that you aren’t missing out on good
            pictures from photographers who capture different subjects than you
            do. But more importantly, when you see a wide range of photographic
            types and styles, you might be inspired to try out another genre of
            photography for yourself.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
