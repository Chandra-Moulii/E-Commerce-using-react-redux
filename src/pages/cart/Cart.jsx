import "../../assets/Cart.css";
import Cartitem from "./Cartitem";
import OrderDetails from "./OrderDetails";
import { useEffect, useState, useRef } from "react";
import { removeall } from "../../Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

const Cart = () => {
  const ref = useRef();
  const [visibile, setvisible] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const itemsincart = products.filter((item) => item.itemsInCart > 0);
  const cartitems = itemsincart.map(
    ({ id, item, offer, itemsInCart, outOfStock, name, price }) => {
      return (
        <Cartitem
          key={id}
          props={{ id, item, offer, itemsInCart, outOfStock, name, price }}
        />
      );
    }
  );

  function handleClick() {
    dispatch(removeall());
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        ref.current.className = "top active";
      } else {
        ref.current.className = "top";
      }
    });
  }, []);
  return (
    <>
      <header id="top">
        <h2>Cart items ({itemsincart.length})</h2>
        {itemsincart.length > 0 ? (
          <a href="#" onClick={handleClick}>
            Clear
          </a>
        ) : null}
      </header>

      {itemsincart.length == 0 ? (
        <div className="warning">
          <p>No items in cart please shop something!!</p>
          <a href="/products">Back to shop</a>
        </div>
      ) : (
        <>
          <div className="cartItemWrapper">{cartitems}</div>
          <button className="billbtn" onClick={() => setvisible(true)}>
            Generate bill
          </button>
          {createPortal(
            <OrderDetails
              visibile={{ visibile, setvisible }}
              data={itemsincart}
            />,
            document.body
          )}
        </>
      )}
      <a href="#top">
        <div ref={ref} className="top">
          <span className="material-symbols-outlined">expand_less</span>
        </div>
      </a>
    </>
  );
};

export default Cart;
