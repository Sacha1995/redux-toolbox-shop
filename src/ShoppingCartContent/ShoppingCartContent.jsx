import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../Controllers";
import {
  changeContentShoppingCart,
  decrement,
  increment,
  selectProducts,
} from "../Redux-toolbox/shopSlice";
import Description from "./Description";
import Total from "./Total";

const ShoppingCartContent = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  let shoppingCart = getShoppingCart(products);

  if (!shoppingCart) {
    return <p>Your shopping card is empty.</p>;
  }

  return (
    <div className="shoppingCartContent">
      <Description />
      {shoppingCart.map((product) => {
        const { id, title, quantity, price } = product;
        return (
          <div key={id} className="shoppingCartItem">
            <p
              onClick={() => {
                dispatch(decrement(id));
              }}
            >
              {" "}
              -{" "}
            </p>
            <p>{quantity}</p>
            <p
              onClick={() => {
                dispatch(increment(id));
              }}
            >
              {" "}
              +{" "}
            </p>
            <p className="shoppingCartItemTitle">{title}</p>
            <p>£{Number(price).toFixed(2)}</p>
            <p>£{Number(price * quantity).toFixed(2)}</p>
            <img
              src="./bin.svg"
              alt="delete button"
              className="delete"
              onClick={() => {
                dispatch(changeContentShoppingCart(id));
              }}
            />
          </div>
        );
      })}
      <Total />
    </div>
  );
};

export default ShoppingCartContent;