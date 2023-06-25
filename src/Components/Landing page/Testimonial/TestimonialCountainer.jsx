import "./Testimonial.css";
import Testimonial from "./Testimonial";

//The TestimonialCountainer component serves as a wrapper for displaying a collection of testimonials
export default function TestimonialCountainer() {
  return (
    <div className="container">
      <h1 className="Testimoniall" style={{ textAlign: "center" }}>
        What our client say !{" "}
      </h1>
      <div className="HoldTestimonial" >
        <Testimonial
          name="Emma"
          descraption="They're beautiful, excellent quality, and the shopping experience is simple and easy."
          img="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Testimonial
          name="Dania"
          descraption="Terrific and personalised shopping experience. Items made with creative flair and love."
          img="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Testimonial
          name="Ava"
          descraption="I do love jewellery designs that are unique, delicate and striking - all of the pieces are."
          img="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Testimonial
          name="Noor"
          descraption="I have previously purchased items from Simone and the quality is exceptional.Thanks."
          img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
}
