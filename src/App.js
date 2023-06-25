// import "./App.css";
import AllProducts from "./Components/ALLproduct/AllProducts";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Components/Registration/Register";
import Checkout from "./Components/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Landing from "./Components/Landing page/Landing";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import History from "./Components/History/History";
import "./App.css";
function App() {
  return (
    <div className="ALLtHING">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:UserId" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path=":UserId/Cart/:UserId/Checkout" element={<Checkout />} />
        <Route path="/:UserId/AllProducts" element={<AllProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path=":UserId/Cart" element={<Cart />} />
        <Route path=":UserId/History" element={<History />} />
        <Route
          path=":UserId/AllProducts/ProductDetails/:productId"
          element={<ProductDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
