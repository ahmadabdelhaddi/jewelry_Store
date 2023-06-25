import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

// we use bootstrap react to create image slider
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: " Nantes Light, serif",
            }}
          >
            LIVE THE MOMENT
          </h1>
          <h3 style={{ fontFamily: " Nantes Light, serif" }}>
            Welcome to the World Jewelry{" "}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontFamily: " Nantes Light, serif" }}>
            LIVE THE MOMENT
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontFamily: " Nantes Light, serif" }}>
            LIVE THE MOMENT
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
