import React from "react";
import { useLocation } from "react-router-dom";
import "./Styles/emailVerfication.css";
import { Button } from "react-bootstrap";
const EmailVerfication = () => {
  const location = useLocation();
  const { email } = location.state || {};
  return (
    <div className="verification-page">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="verification-content text-center">
          <h2>Email Verification</h2>
          {email && (
            <p>
              An email with your account confirmation link has been sent to your
              email: <strong>{email}</strong>
            </p>
          )}
          <p>Check Your Email and come back to proceed!</p>
          <Button
            className="proceed-btn"
            onClick={() => {
              /* Logic to proceed */
            }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfication;
