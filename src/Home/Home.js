import React from "react";
import { Carousel, Button, Card } from "react-bootstrap";
import companyLogoImage from "../Assets/Images/REPLACE_THIS_SCREEN11112111101.png";
import "./Styles/Home.css";
import { Link } from "react-router-dom";
import motorcycleImage from "../Assets/Images/Mask_Group_3.png";
import bicycleImage from "../Assets/Images/Mask_Group_5.png";
import vespaImage from "../Assets/Images/IMG-9725-Original.png";
import truckImage from "../Assets/Images/Mask_Group_2.png";
import truckImageTwo from "../Assets/Images/Mask_Group_2_jx.png";
import carKeyImage from "../Assets/Images/Mask_Group_1.png";
const Home = () => {
  return (
    <div className="container">
      <section className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              src={companyLogoImage}
              alt="Company-Logo-Image"
              style={{ width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={companyLogoImage}
              alt="Company-Logo-Image"
              style={{ width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={companyLogoImage}
              alt="Company-Logo-Image"
              style={{ width: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="offers-container">
        <div className="offers-title">
          <h1>HOT OFFERS</h1>
          <Link className="expand-link">SEE ALL</Link>
        </div>
        <div className="cards-container">
          <div className="first-ad">
            <figure style={{ position: "relative" }}>
              <img src={motorcycleImage} alt="first ad" />
              <Button variant="light" className="shop-btn">
                SHOP NOW
              </Button>
            </figure>
          </div>
          <div className="Item-1">
            <Card className="cardItem">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={bicycleImage}
                  className="cardImage"
                  style={{ height: "250px", width: "260px" }}
                />
                <div className="used-label">USED</div>
              </div>

              <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Subtitle>Brand</Card.Subtitle>
                <div className="product-footer">
                  <div className="prdct-left-footer">
                    <Card.Text>25.00EGP</Card.Text>
                    <Card.Text>25.00EGP</Card.Text>
                  </div>
                  <div className="prdct-right-footer">
                    <Card.Text>30% OFF</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="Item-2">
            <Card className="cardItem">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={vespaImage}
                  className="cardImage"
                  style={{ height: "250px", width: "260px" }}
                />
                <div className="used-label">NEW</div>
              </div>

              <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Subtitle>Brand</Card.Subtitle>
                <div className="product-footer">
                  <div className="prdct-left-footer">
                    <Card.Text>25.00EGP</Card.Text>
                    <Card.Text>25.00EGP</Card.Text>
                  </div>
                  <div className="prdct-right-footer">
                    <Card.Text>30% OFF</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="Item-3">
            {" "}
            <Card className="cardItem">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={truckImage}
                  className="cardImage"
                  style={{ height: "250px", width: "260px" }}
                />
                <div className="used-label">NEW</div>
              </div>

              <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Subtitle>Brand</Card.Subtitle>
                <div className="product-footer">
                  <div className="prdct-left-footer">
                    <Card.Text>25.00EGP</Card.Text>
                    <Card.Text>25.00EGP</Card.Text>
                  </div>
                  <div className="prdct-right-footer">
                    <Card.Text>30% OFF</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="Item-4">
            <Card className="cardItem">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={truckImageTwo}
                  className="cardImage"
                  style={{ height: "250px", width: "260px" }}
                />
                <div className="used-label">NEW</div>
              </div>

              <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Subtitle>Brand</Card.Subtitle>
                <div className="product-footer">
                  <div className="prdct-left-footer">
                    <Card.Text>25.00EGP</Card.Text>
                    <Card.Text>25.00EGP</Card.Text>
                  </div>
                  <div className="prdct-right-footer">
                    <Card.Text>30% OFF</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="second-ad">
            {" "}
            <figure style={{ position: "relative" }}>
              <img src={carKeyImage} alt="second-ad" />
              <Button variant="light" className="shop-btn">
                SHOP NOW
              </Button>
            </figure>
          </div>
          <div className="offer-footer">50% Off</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
