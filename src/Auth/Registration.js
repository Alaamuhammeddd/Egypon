import React, { useState } from "react";
import { FaGooglePlusSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import "./Styles/registration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [userType, setUserType] = useState("customer");
  // const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(""); // State for email
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle your registration logic
    // After successful registration, navigate to verification page with email
    navigate("/email-verfication", { state: { email } }); // Pass email as state
  };
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
      <Form onSubmit={handleSubmit}>
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
                  <Form.Label className="form-label">Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder="eg. John"
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    className="form-input"
                    placeholder="eg. john.doe@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">Line Number</Form.Label>
                  <Form.Control
                    type="tel"
                    className="form-input"
                    placeholder="eg. 02-23456789"
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
                <div className="input-group">
                  <Form.Label className="form-label">Gender</Form.Label>
                  <Form.Select
                    className="form-input"
                    aria-label="Gender select"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
              </div>
              <h2 className="addrs-title">Address</h2>
              <div className="addrs-grp">
                <div className="input-group">
                  <Form.Label className="form-label">Address</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder="eg. 123 Main St."
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">Country</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder="eg. Egypt"
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
                  <Form.Label className="form-label">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    className="form-input"
                    placeholder="eg. TechCorp Co."
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">
                    Company Land Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className="form-input"
                    placeholder="eg. TechCorp Co."
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">
                    Company Mobile Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className="form-input"
                    placeholder="eg. TechCorp.com"
                  />
                </div>
              </div>
              <h2 className="addrs-title">Address</h2>
              <div className="addrs-grp">
                <div className="input-group">
                  <Form.Label className="form-label">Address</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder="eg. 123 Business St."
                  />
                </div>
                <div className="input-group">
                  <Form.Label className="form-label">Country</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder="eg. Egypt"
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
                <div className="input-group">
                  <Form.Label className="form-label">
                    Tax Card Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    placeholder=" Tax Card Number"
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
        <Button className="register-btn" type="submit">
          Register
        </Button>
      </Form>
      <span className="log-in-link-container">
        Old member? &nbsp;
        <Link to={"/login"} className="login-link">
          {" "}
          Log-in here.
        </Link>
      </span>
    </div>
  );
};

export default Registration;
