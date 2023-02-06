import "../../assets/Cart.css";
import Cartitem from "./Cartitem";
import OrderDetails from "./OrderDetails";
import { useState } from "react";
import { removeall } from "../../Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

const Cart = () => {
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
  return (
    <>
      <header>
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
            Buy and generate bill
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
    </>
  );
};

export default Cart;
