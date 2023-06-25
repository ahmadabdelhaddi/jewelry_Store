import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { useParams, Link } from "react-router-dom";
export default function AllProducts() {
  const [products, setProduct] = useState([]);
  const [currentUsers, setUser] = useState([]);
  let Params = useParams();
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
    getCuruntUser();
  }, []);

  function getCuruntUser() {
    if (Params.UserId !== undefined) {
      fetch(`http://localhost:9000/Users/${Params.UserId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }
  function links(id) {
    if (Params.UserId !== undefined) {
      return `ProductDetails/${id}`;
    } else {
      return "../Login";
    }
  }
  return (
    <section className="cards">
      {products.map((ele) => {
        return (
          <article key={ele.id} className="ProductsCards">
            <Link to={links(ele.id)}>
              <div>
                <img src={ele.image} alt={ele.name} />
              </div>
              <div className="icons">
                <div className="icon1">
                  <i
                    className="fa-sharp fa-solid fa-eye fa-xl icon"
                    style={{ color: " #0000006e" }}
                  ></i>
                </div>
                <div>
                  <i
                    className="fa-sharp fa-solid fa-heart fa-xl icon"
                    style={{ color: "#0000006e" }}
                  ></i>
                </div>
              </div>
              <div className="card-details">
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }}
                >
                  {ele.name}
                </p>

                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                  {ele.price} JD
                </h1>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
