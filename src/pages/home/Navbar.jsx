import "../../assets/Navbar.css";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const input = useRef();
  const state = useSelector((state) => state);
  let totalitems = state.reduce((acc, curr) => {
    curr.itemsInCart > 0 ? acc++ : acc;
    return acc;
  }, 0);
  function handleSubmit(e) {
    e.preventDefault();
    // Store change or other logic for search
  }
  return (
    <>
      <nav>
        <a href="/">E-Commerce</a>
        {/* <form action="" onSubmit={handleSubmit}>
          <input ref={input} type="search" placeholder="Search products" />
        </form> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <a href="/cart" title="Cart" className="cart">
            {/* <p className="totalitemsincart">{totalitems}</p> */}
            <span className="material-symbols-outlined">shopping_bag</span>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
