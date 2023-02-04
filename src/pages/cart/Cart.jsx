import "../../assets/Cart.css";
import { removeall } from "../../Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from "./Cartitem";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const itemsincart = products.filter((item) => item.itemsInCart > 0);
  const cartitems = itemsincart.map(
    ({ id, item, offer, itemsInCart, name, price }) => {
      return (
        <Cartitem
          key={id}
          props={{ id, item, offer, itemsInCart, name, price }}
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
        <h1>Your items in cart ({itemsincart.length})</h1>
        {itemsincart.length > 0 ? (
          <span onClick={handleClick}>Clear cart</span>
        ) : null}
      </header>

      {itemsincart.length == 0 ? (
        <div className="warning">
          <p>No items in cart please shop something!!</p>
          <a href="/">Back to shop</a>
        </div>
      ) : (
        <>
          <div className="cartItemWrapper">{cartitems}</div>
          <button className="billbtn">Buy and generate bill</button>
        </>
      )}
    </>
  );
};

export default Cart;
