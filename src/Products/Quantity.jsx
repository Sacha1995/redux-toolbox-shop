import { useDispatch, useSelector } from "react-redux";
import { getQuantity } from "../Controllers";
import { adjustQuantity, selectProducts } from "../Redux-toolbox/shopSlice";

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
          dispatch(adjustQuantity({ id: id, type: "decrement" }));
        }}
      />
      <p>{quantity}</p>
      <img
        src="./add.svg"
        alt="add button"
        className="plus controlsQuantity"
        onClick={() => {
          dispatch(adjustQuantity({ id: id, type: "increment" }));
        }}
      />
    </div>
  );
};

export default Quantity;
