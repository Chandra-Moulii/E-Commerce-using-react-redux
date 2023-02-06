import "../../assets/OrderDetails.css";
import { useRef } from "react";
const OrderDetails = ({ visibile: { visibile, setvisible }, data }) => {
  const ref = useRef();
  let totalprice = data.reduce((acc, curr) => {
    acc = curr.outOfStock ? acc : (acc += curr.price * curr.itemsInCart);
    return acc;
  }, 0);

  const items = data.map((item) => {
    if (!item.outOfStock) {
      return (
        <p key={item.id} className="details">
          {item.name} ({item.itemsInCart}) -{" "}
          <span className="price">${item.price * item.itemsInCart}</span>
        </p>
      );
    }
  });

  function handleClick() {
    window.print();
  }

  function handlepayment() {
    ref.current.innerText = "Success";
    setTimeout(() => {
      ref.current.innerText = "Continue to payment";
    }, 3000);
  }

  return (
    <>
      {visibile ? (
        <>
          {/* This modal is scrolling fix-it */}
          <div className="overlay"></div>
          <div className="modalwrapper">
            <h1>Order Details</h1>
            <p className="itemtitle">Items</p>
            <div className="items">{items}</div>
            <hr />
            <p className="total">Total - ${totalprice}</p>
            <button className="closemodal" onClick={() => setvisible(false)}>
              Close
            </button>
            <button className="paymentbtn" ref={ref} onClick={handlepayment}>
              Continue to payment
            </button>
            <button className="print" onClick={handleClick}>
              Print
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OrderDetails;
