import React from "react";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import "./Styles/registration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="register-container">
      <h2 className="register-page-title">Registration</h2>
      <div className="register-methods">
        <div className="register-method">
          <span>
            Register with Facebook{" "}
            <FaFacebookSquare
              size=" 25px"
              style={{
                marginLeft: "7px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </span>
        </div>
        <div className="register-method">
          <span>
            Register with Google+{" "}
            <FaGooglePlusSquare
              size=" 25px"
              style={{
                marginLeft: "7px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </span>
        </div>
        <div className="register-method">
          <span>
            Phone Number{" "}
            <FaSquarePhone
              size=" 25px"
              style={{
                marginLeft: "7px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </span>
        </div>
      </div>
      <span className="divider">OR</span>
      <div className="personal-details">
        <h2 className="prsnl-title">Personal Details</h2>
        <div className="prsn-detail-grp">
          <div className="input-group">
            <Form.Label className="form-label">First Name</Form.Label>
            <Form.Control type="text" className="form-input" />
          </div>
          <div className="input-group">
            <Form.Label className="form-label">Last Name</Form.Label>
            <Form.Control type="text" className="form-input" />
          </div>
          <div className="input-group">
            <Form.Label className="form-label">Email Address</Form.Label>
            <Form.Control type="email" className="form-input" />
          </div>
          <div className="input-group">
            <Form.Label className="form-label">Mobile Number</Form.Label>
            <Form.Control type="text" className="form-input" />
          </div>
        </div>
        <h2 className="addrs-title">Address</h2>
        <div className="addrs-grp">
          <div className="input-group">
            <Form.Label className="form-label">Street</Form.Label>
            <Form.Control type="text" className="form-input" />
          </div>
          <div className="input-group">
            <Form.Label className="form-label">Governorate</Form.Label>
            <Form.Control type="text" className="form-input" />
          </div>
        </div>
      </div>
      <Button className="register-btn">Register</Button>
      <span className="log-in-link-container">
        Old member ? &nbsp;<Link className="login-link"> Log-in here.</Link>
      </span>
    </div>
  );
};

export default Registration;
