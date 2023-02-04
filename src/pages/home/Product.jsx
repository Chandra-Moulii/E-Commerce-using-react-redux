import "../../assets/Product.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/Actions/actions";

const Product = ({
  props: { id, item, offer, itemsInCart, name, outOfStock, price },
}) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addtocart(id));
  }
  return (
    <>
      <div className="container">
        <div className="image">
          <img src={item} alt={name} />
          {itemsInCart > 0 ? (
            <span onClick={handleClick}>Add to cart ({itemsInCart}) </span>
          ) : (
            <span onClick={handleClick}>Add to cart </span>
          )}
          {outOfStock ? (
            <span className="buy nostock">Out of stock</span>
          ) : (
            <span className="buy">Buy now</span>
          )}
        </div>
        <div className="info">
          <p className="name">{name}</p>
          {offer ? (
            <p className="price offer">${price} (Offer)</p>
          ) : (
            <p className="price">${price}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
