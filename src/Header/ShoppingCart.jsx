import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../Controllers";
import {
  selectProducts,
  selectViewShoppingCartStatus,
  viewShoppingCart,
} from "../Redux-toolbox/shopSlice";
import ShoppingCartContent from "../ShoppingCartContent/ShoppingCartContent";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const viewShoppingCartStatus = useSelector(selectViewShoppingCartStatus);

  if (!products) {
    return;
  }
  let shoppingCart = getShoppingCart(products);

  return (
    <div
      className="shoppingCartContainer"
      onClick={() => {
        dispatch(viewShoppingCart());
      }}
    >
      <p>{shoppingCart ? shoppingCart.length : 0}</p>
      <img src="./shopping.svg" alt="shopping cart" className="shoppingCart" />
      {viewShoppingCartStatus && <ShoppingCartContent />}
    </div>
  );
};

export default ShoppingCart;
