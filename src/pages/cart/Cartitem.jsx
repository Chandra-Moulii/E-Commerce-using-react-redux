import "../../assets/Cartitem.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/Actions/actions";
import { removefromcart } from "../../Redux/Actions/actions";

const Cartitem = ({ props: { id, item, offer, itemsInCart, name, price } }) => {
  const dispatch = useDispatch();
  function handledecrement() {
    dispatch(removefromcart(id));
  }
  function handleincrement() {
    dispatch(addtocart(id));
  }
  return (
    <>
      <div>
        <div className="carItem">
          <img src={item} alt={name} />
          <p className="totalprice">Total ${price * itemsInCart}</p>
        </div>
        <div className="info">
          {offer ? (
            <p className="name offer">
              {name} ${price} (Offer)
            </p>
          ) : (
            <p className="name">
              {name} ${price}{" "}
            </p>
          )}
        </div>
        <div className="footer">
          <button className="decrease" onClick={handledecrement}>
            -
          </button>
          <span>{itemsInCart}</span>
          <button className="increase" onClick={handleincrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
