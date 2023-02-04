export const ADD_TO_CART = "addtocart";
export const REMOVE_FROM_CART = "removefromcart";
export const REMOVE_ALL = "removeall";

export function addtocart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}

export function removefromcart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

export function removeall() {
  return {
    type: REMOVE_ALL,
  };
}
