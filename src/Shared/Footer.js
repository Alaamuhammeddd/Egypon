import React from "react";
import footerLogo from "../Assets/Images/IMG-0186-removebg-previewCROP.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import "./Styles/footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div class="logo-and-links">
        <div className="logo-and-icons">
          <figure>
            <img src={footerLogo} alt="brand-logo" />
          </figure>
          <figure>
            <div className="social-media-icons">
              <FaFacebookSquare size="25px" />
              <FaGooglePlusSquare size="25px" />
              <FaSquareXTwitter size="25px" />
            </div>
          </figure>
        </div>
        <div className="footer-links">
          <div class="footer-policy">
            <h3>Policy</h3>
            <ul className="policy-list">
              <li>Terms of Usage</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div class="footer-categories">
            <h3>Categories</h3>
            <ul className="categories-list">
              <li>Bike</li>
              <li>Car</li>
              <li>EQP Care</li>
              <li>NEW</li>
              <li>Used Supplements</li>
            </ul>
          </div>
          <div class="footer-contacts">
            <h3>Contacts</h3>
            <ul className="contacts-list">
              <li>+201234567890</li>
              <li>egypon2019@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="payment-logos">
        <SiMastercard size="50px" />
        <RiVisaLine size="50px" />
      </div>
    </div>
  );
};

export default Footer;
