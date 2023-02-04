import "../../assets/Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  const input = useRef();
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
          <a href="/">Home</a>
          <a href="/cart" title="Cart">
            <span className="material-symbols-outlined">shopping_bag</span>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
