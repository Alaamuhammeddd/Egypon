import React from "react";
import bgImage from "../Assets/Images/n_153884_OR7V8B1@2x.png";
import "./Styles/login.css"; // Import the external CSS
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form, Button } from "react-bootstrap";
import brandLogo from "../Assets/Images/IMG-0186-removebg-previewCROP.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container-fluid m-0 p-0 ">
      <figure className="bgImage">
        <img src={bgImage} alt="bgImage" className="image" />
        <div className="formContainer">
          <div className="brandHeader">
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="brandLogo"
              style={{ width: "100%" }}
            />
            {/* <h2 className="brandName">Egypon</h2> */}
          </div>
          <Form className="loginForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "100%", height: "40px", fontSize: "16px" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "100%", height: "40px", fontSize: "16px" }}
              />
            </Form.Group>

            <Button className="customThemeButton" type="submit">
              Submit
            </Button>
            <div className="forgotPassword">
              <Link to="/forgot-password" className="forgotPasswordLink">
                Forgot Password?
              </Link>
            </div>
          </Form>
        </div>
      </figure>
    </div>
  );
};

export default Login;
