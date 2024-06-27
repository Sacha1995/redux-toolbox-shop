import { useDispatch, useSelector } from "react-redux";
import { getQuantity } from "../Controllers";
import {
  decrement,
  increment,
  selectProducts,
} from "../Redux-toolbox/shopSlice";

const Quantity = ({ id }) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const quantity = getQuantity(id, products);

  return (
    <div className="quantity">
      <img
        src="./delete.svg"
        alt="minus button"
        className="minus controlsQuantity"
        onClick={() => {
          dispatch(decrement(id));
        }}
      />
      <p>{quantity}</p>
      <img
        src="./add.svg"
        alt="add button"
        className="plus controlsQuantity"
        onClick={() => {
          dispatch(increment(id));
        }}
      />
    </div>
  );
};

export default Quantity;
