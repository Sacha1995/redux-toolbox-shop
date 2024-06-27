import { useSelector } from "react-redux";
import { calculateTotal, getShoppingCart } from "../Controllers";
import { selectProducts } from "../Redux-toolbox/shopSlice";

const Total = () => {
  const products = useSelector(selectProducts);

  let shoppingCard = getShoppingCart(products);
  const total = calculateTotal(shoppingCard);

  return (
    <div className="shoppingCartItem total">
      <p>Total:</p>
      <p>£{total}</p>
    </div>
  );
};

export default Total;
