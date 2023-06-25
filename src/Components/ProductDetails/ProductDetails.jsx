import { useEffect, useState } from "react";
import "./productDetails.css";
import axios from "axios";
import { useParams ,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2' 

function ProductDetails() {
  let navigate =useNavigate()
  let Params = useParams();
  console.log(Params)
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    GetProduct();
    if (Params.UserId !== undefined) {
      Getusers();

      Getcart();
    }
  }, []);

  const GetProduct = () => {
    fetch(`http://localhost:9000/jewelryArray/${Params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
      });
  };

  const Getusers = () => {
    fetch(`http://localhost:9000/Users/${Params.UserId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };
  const Getcart = () => {
    fetch(`http://localhost:9000/Users/${Params.UserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.Cart);
      });
  };
  const UpdateUser = () => {
    const index = cart.findIndex((e) => e.id === product.id);
    if (index === -1) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      axios.put(`http://localhost:9000/Users/${Params.UserId}`, {
        ...user,
        Cart: updatedCart
      });
    } else {
      console.log(cart);
      const updatedCart = cart.map((e) => {
        if (e.id === product.id) {
          return {
            ...e,
            quantity: e.quantity + product.quantity,
            price: e.price + product.price
          };
        }
        return e;
      });
      setCart(updatedCart);
      axios.put(`http://localhost:9000/Users/${Params.UserId}`, {
        ...user,
        Cart: updatedCart
      });
    }
    
  };

  function addToCart() {
    UpdateUser();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
    
    }).then((res)=>{
    
      if(res.isConfirmed){
        navigate(`/${Params.UserId}/AllProducts`)
      }
    })
  }

  function incrementQuantity() {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
      price: price * (prevProduct.quantity + 1)
    }));
  }

  function decrementQuantity() {
    if (product.quantity > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
        price: price * (prevProduct.quantity - 1)
      }));
    }
  }

  return (
    <main>
      <section className="productInside">
        <article className="productDetails">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-price-quantity">
            <div className="quantity">
              <h1>Quantity:</h1>
              <button onClick={() => incrementQuantity()}>+</button>
              <h1>{product.quantity}</h1>
              <button
                onClick={() => {
                  decrementQuantity();
                }}
              >
                -
              </button>
            </div>
            <div className="price">
              <h1>Total price: {product.price} JD</h1>
            </div>
          </div>
          <button onClick={() => addToCart()}>Add to card</button>
        </article>
        <div className="productImage">
          <img src={product.image} alt={product.name} />
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
