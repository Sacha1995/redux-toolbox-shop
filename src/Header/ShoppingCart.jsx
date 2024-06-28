import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../Controllers";
import { selectProducts } from "../Redux-toolbox/shopSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  // const viewShoppingCartStatus = useSelector(selectViewShoppingCartStatus);

  if (!products) {
    return;
  }
  let shoppingCart = getShoppingCart(products);

  return (
    <div
      className="shoppingCartContainer"
      // onClick={() => {
      //   dispatch(viewShoppingCart());
      // }}
    >
      <p>{shoppingCart ? shoppingCart.length : 0}</p>
      <Link to="./shoppingcart">
        <img
          src="./shopping.svg"
          alt="shopping cart"
          className="shoppingCart"
        />
      </Link>
      {/* {viewShoppingCartStatus && <ShoppingCartContent />} */}
    </div>
  );
};

export default ShoppingCart;
