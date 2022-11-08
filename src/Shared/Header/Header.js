import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assest/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} alt="" />
            <Link to="/" className="nav-title">
              Shutter Up
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
