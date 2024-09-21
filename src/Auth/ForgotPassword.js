import React, { useState } from "react";
import bgImage from "../Assets/Images/n_153884_OR7V8B1@2x.png";
import brandLogo from "../Assets/Images/IMG-0186-removebg-previewCROP.png";
import { Form, Button, Alert } from "react-bootstrap";
import "./Styles/forgotPassword.css"; // Use the same styles from login

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    // Simulate an API request for password reset
    try {
      // Simulate success response
      setTimeout(() => {
        setMessage(
          "If an account with this email exists, a password reset link will be sent."
        );
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid m-0 p-0 w-100">
      <figure className="bgImage">
        <img src={bgImage} alt="bgImage" className="image" />
        <div className="formContainer">
          {/* Brand logo and name */}
          <div className="brandHeader">
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="brandLogo"
              style={{ width: "100%" }}
            />
          </div>

          <Form className="forgotPasswordForm" onSubmit={handleSubmit}>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Your Email For Password Reset</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", height: "40px", fontSize: "16px" }}
              />
            </Form.Group>

            <Button
              className="customThemeButton"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </div>
      </figure>
    </div>
  );
};

export default ForgotPassword;
