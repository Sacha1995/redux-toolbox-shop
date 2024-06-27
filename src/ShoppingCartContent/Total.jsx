import { useSelector } from "react-redux";
import { calculateTotal, getShoppingCart } from "../Controllers";
import { selectProducts } from "../Redux-toolbox/shopSlice";

const Total = () => {
  const products = useSelector(selectProducts);

  if (products.length === 0) {
    return;
  }
  let shoppingCard = getShoppingCart(products);

  if (shoppingCard.length === 0) {
    return;
  }
  const total = calculateTotal(shoppingCard);

  return (
    <div className="shoppingCartItem total">
      <p>Total:</p>
      <p className="totalPrice">£{Number(total).toFixed(2)}</p>
    </div>
  );
};

export default Total;
