import Navbar from "./pages/home/Navbar";
import Products from "./pages/home/Products";
import Cart from "./pages/cart/Cart";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
