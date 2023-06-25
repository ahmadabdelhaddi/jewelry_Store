import React from "react";
import "./Testimonial.css";

// The Testimonial function is a React component
//  that renders a testimonial section.
// It takes props as an argument,
// which includes the following properties:
// img ,name and descraption

function Testimonial(props) {
  return (
    <section className="testimonial">
      <div className="containerrr">
        <div className="carrd">
          <div>
            <img src={props.img} alt="" />
          </div>
          <div className="iconn">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <h5 className="NameClient">{props.name}</h5>

          <p className="descraption">{props.descraption}</p>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
