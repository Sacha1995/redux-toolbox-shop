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
    </div>
  );
};

export default Quantity;
