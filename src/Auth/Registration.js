import React, { useState } from "react";
import { FaGooglePlusSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import "./Styles/registration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Registration = () => {
  const [userType, setUserType] = useState("customer"); // Set initial state to 'customer'

  return (
    <div className="register-container">
      <h2 className="register-page-title">Registration</h2>
      <div className="register-methods">
        <div className="register-method">
          <span>
            Register with Facebook{" "}
            <FaFacebookSquare
              size="25px"
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
              size="25px"
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
              size="25px"
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

        <div className="user-type-selection">
          <Form.Check
            type="radio"
            id="customer"
            name="userType"
            label="Customer"
            checked={userType === "customer"}
            onChange={() => setUserType("customer")}
          />
          <Form.Check
            type="radio"
            id="company"
            name="userType"
            label="Company"
            checked={userType === "company"}
            onChange={() => setUserType("company")}
          />
        </div>

        {userType === "customer" ? (
          // Fields for customer
          <>
            <div className="prsn-detail-grp">
              <div className="input-group">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. John"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. Doe"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  className="form-input"
                  placeholder="eg. john.doe@example.com"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  className="form-input"
                  placeholder="eg. 01234567890"
                />
              </div>
            </div>
            <h2 className="addrs-title">Address</h2>
            <div className="addrs-grp">
              <div className="input-group">
                <Form.Label className="form-label">Street</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. 123 Main St."
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">City</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. Nasr City"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Governate</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. Cairo"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. 12345"
                />
              </div>
            </div>
          </>
        ) : (
          // Fields for company
          <div className="company-detail-grp">
            <div className="cmpny-grp">
              <div className="input-group">
                <Form.Label className="form-label">Company Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. TechCorp Co."
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Company Website</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. TechCorp.com"
                />
              </div>
            </div>
            <h2 className="addrs-title">Address</h2>
            <div className="addrs-grp">
              <div className="input-group">
                <Form.Label className="form-label">Street</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. 123 Business St."
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">City</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. Cairo"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">State</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. New York"
                />
              </div>
              <div className="input-group">
                <Form.Label className="form-label">Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="eg. 12345"
                />
              </div>
            </div>
            <h2 className="addrs-title">Other </h2>
            <div className="cmpny-grp">
              <div className="input-group">
                <Form.Label className="form-label">
                  Commercial Register Number
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  placeholder="Commercial Register Number"
                />
              </div>
            </div>
          </div>
        )}

        <h2 className="psswrd-title">Password</h2>
        <div className="psswrd-grp">
          <div className="input-group">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              className="form-input"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <Button className="register-btn">Register</Button>
      <span className="log-in-link-container">
        Old member? &nbsp;<Link className="login-link"> Log-in here.</Link>
      </span>
    </div>
  );
};

export default Registration;
