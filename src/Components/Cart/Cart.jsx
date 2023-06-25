import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Cart() {
  const [carts, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState();
  let Params = useParams();
  console.log(Params.UserId);

  useEffect(() => {
    fetch(`http://localhost:9000/Users/${Params.UserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.Cart);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error here
      });
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    carts.forEach((ele) => {
      totalPrice += ele.price;
    });
    setTotal(totalPrice);
  }, [carts]);
  function RemoveProduct(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const updatedCart = carts.filter((item) => item.id !== id);
        axios
          .put(`http://localhost:9000/Users/${Params.UserId}`, {
            ...user,
            Cart: updatedCart
          })
          .then((response) => {
            console.log("Product removed from cart");
            setCart(updatedCart);
          });
      }
    });
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <table className="table table-light  ">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Qty</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>

        <tbody>
          {carts.map((elm) => (
            <tr key={elm.id}>
              <th scope="row">
                <img width="100px" src={elm.image} alt={elm.name} />
              </th>
              <td>{elm.name}</td>
              <td>
                <input type="text" disabled value={elm.quantity} />
              </td>
              <td>{elm.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    RemoveProduct(elm.id);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h4>{total}$</h4>
        <Link to={`${Params.UserId}/Checkout`}>
          <button
            className="btn btn-warning btn-sm p-10"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "130px"
            }}
          >
            Check out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
