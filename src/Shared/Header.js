import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Styles/header.css";
import { IoIosCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import InputGroup from "react-bootstrap/InputGroup";
import headerLogo from "../Assets/Images/IMG-0186-removebg-preview_dCROPPED.png";
const Header = () => {
  return (
    <div className="main-header">
      <Navbar expand="md" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="header-logo-container">
            <figure>
              <img src={headerLogo} alt="Logo" className="header-logo" />
            </figure>
          </Navbar.Brand>
          <Form className="form-container">
            <div className="search-wrapper">
              <Form.Control
                className="search-controller"
                type="search"
                placeholder="Type in and hit Enter"
              />
              <i className="fa fa-search search-icon"></i>
            </div>
          </Form>
          <Offcanvas.Body>
            <Nav className="nav-links">
              <Nav.Link href="#action1" className="nav-link-item">
                <IoIosCart size="41px" className="cart-icon" />
                Cart
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link-item">
                User <FaRegUserCircle size="31px" className="user-icon" />
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link-item">
                Eng/Ar
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link-item">
                <FaRegHeart />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Container>
      </Navbar>
      <div className="nav-choice">
        <span>Page Name</span>
      </div>
    </div>
  );
};

export default Header;
