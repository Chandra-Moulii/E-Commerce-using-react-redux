import Navbar from "./pages/home/Navbar";
import Products from "./pages/home/Products";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/home/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
