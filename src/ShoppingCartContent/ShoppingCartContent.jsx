import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../Controllers";
import Quantity from "../Products/Quantity";
import {
  changeContentShoppingCart,
  selectProducts,
} from "../Redux-toolbox/shopSlice";
import Description from "./Description";
import Total from "./Total";

const ShoppingCartContent = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  let shoppingCart = getShoppingCart(products);

  if (shoppingCart.length === 0) {
    return (
      <div className="containerEmptyMessage">
        <div className="emptyMessage">
          <Link to="/">Back to shopping</Link>
          <p>Your shopping card is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shoppingCartContentContainer">
      <div className="shoppingCartContent">
        <Link to="/">Back to shopping</Link>
        <Description />
        {shoppingCart.map((product) => {
          const { id, title, quantity, price } = product;
          return (
            <div key={id} className="shoppingCartItem">
              <Quantity id={id} />
              <p className="shoppingCartItemTitle">{title}</p>
              <p>{quantity > 1 ? `£${Number(price).toFixed(2)}` : ""}</p>
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
    </div>
  );
};

export default ShoppingCartContent;
