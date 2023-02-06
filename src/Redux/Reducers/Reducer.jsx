import { ADD_TO_CART } from "../Actions/actions";
import { REMOVE_FROM_CART } from "../Actions/actions";
import { REMOVE_ALL } from "../Actions/actions";
import bag from "../../assets/images/bag.jpg";
import pen from "../../assets/images/pen.jpg";
import chair from "../../assets/images/chair.jpg";
import shirt from "../../assets/images/shirt.jpg";
import xbox from "../../assets/images/xbox.jpg";
import airpods from "../../assets/images/airpods.jpg";
import shoes from "../../assets/images/shoes.jpg";
import watch from "../../assets/images/watch.jpg";
import macbook from "../../assets/images/macbook.jpg";
import wallet from "../../assets/images/wallet.jpg";
import flowerpot from "../../assets/images/flowerpot.jpg";
import sonycamera from "../../assets/images/sonycamera.jpg";

var data = localStorage.getItem("products");
if (data == null) {
  var initialState = [
    {
      id: crypto.randomUUID(),
      item: bag,
      name: "Leather bag",
      price: 100,
      offer: true,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: pen,
      offer: false,
      name: "Reynolds pen",
      price: 50,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: chair,
      offer: true,
      name: "Wooden velvet chair",
      price: 200,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: shirt,
      offer: true,
      name: "H&M shirt",
      price: 80,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: xbox,
      offer: false,
      name: "X-Box console",
      price: 500,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: flowerpot,
      offer: false,
      name: "Flower pot",
      price: 90,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: airpods,
      offer: false,
      name: "Apple airpods",
      price: 800,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: shoes,
      offer: false,
      name: "Nike air",
      price: 1000,
      outOfStock: true,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: watch,
      offer: false,
      name: "Rolex watch",
      price: 2000,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: macbook,
      offer: true,
      name: "Mac book",
      price: 3000,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: wallet,
      offer: false,
      name: "Wallet",
      price: 20,
      outOfStock: false,
      itemsInCart: 0,
    },
    {
      id: crypto.randomUUID(),
      item: sonycamera,
      offer: false,
      name: "Sony camera",
      price: 3000,
      outOfStock: false,
      itemsInCart: 0,
    },
  ];
  localStorage.setItem("products", JSON.stringify(initialState));
} else {
  initialState = JSON.parse(localStorage.getItem("products"));
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.map((item) => {
        if (item.id == action.payload) {
          item.itemsInCart += 1;
        }
        localStorage.setItem("products", JSON.stringify(initialState));
        return item;
      });
    case REMOVE_FROM_CART:
      return state.map((item) => {
        if (item.id == action.payload) {
          item.itemsInCart -= 1;
        }
        localStorage.setItem("products", JSON.stringify(initialState));
        return item;
      });
    case REMOVE_ALL:
      return state.map((item) => {
        item.itemsInCart = 0;
        localStorage.setItem("products", JSON.stringify(initialState));
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
