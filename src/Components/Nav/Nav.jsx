import React, { useEffect } from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = ({}) => {
  const location = useLocation();
  console.log(location);
  const userId = location.pathname.split("/")[1];
  console.log(userId);
  console.log(location.pathname.split("/"));
  const handleProfileToggle = () => {
    const profileMenu = document.querySelector("#navbarProfile .navbar-nav");
    profileMenu.classList.toggle("show");
  };

  const handleMenuToggle = () => {
    const mainMenu = document.querySelector("#navbarMenu .navbar-nav");
    mainMenu.classList.toggle("show");
  };

  function getUserIdProducts() {
    if (userId !== "") {
      return `${userId}/AllProducts`;
    } else {
      return "/AllProducts";
    }
  }
  function getUserIdCart() {
    if (userId >= 1) {
      return `${userId}/Cart`;
    } else {
      return "/Login";
    }
  }
  return (
    <div className="container">
      <div className="top-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-navbar">
          <a className="navbar-brand" style={{ fontSize: "13px" }}>
            PHONE SHOPPING (+962) 7 9661 8504
          </a>
          <div style={{ width: "98%", textAlign: "-webkit-right" }}>
            <button
              style={{ backgroundColor: "white !important" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarProfile"
              aria-controls="navbarProfile"
              aria-expanded="false"
              aria-label="Toggle profile"
              onClick={handleProfileToggle}
            >
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarProfile"
          >
            {console.log(isNaN(userId))}
            <ul className="navbar-nav nav-up-line">
              {userId >= 1 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={`${userId}/History`}>
                      History
                    </Link>
                  </li>
                  <Link className="nav-link" to="/Login">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      LOGIN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Register">
                      CREATE ACCOUNT
                    </Link>
                  </li>
                </>
              )}

              <div
                className="icons-profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f fa-lg text-secondary"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fa-lg text-secondary"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube fa-lg text-secondary"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      <hr className="separator" />

      <div className="second-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-navbar">
          <a className="navbar-brand">
            <img
              className="col-sm"
              src="./image/loogggo3.png"
              alt=""
              width="50px"
            />
            <img src="./image/Untitle22d-1.png" alt="" width="130px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarMenu"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AllCatagery">
                  COLLECTIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={getUserIdProducts()}>
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={getUserIdCart()}>
                  CART
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
