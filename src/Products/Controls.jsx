import { useDispatch } from "react-redux";
import { changeContentShoppingCart } from "../Redux-toolbox/shopSlice";
import Button from "../Reusable code/Button";
import Quantity from "./Quantity";

const Controls = ({ inCart, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="controlsProduct">
      <Button
        className={inCart ? "btn deleteBtn" : "btn addBtn"}
        text={inCart ? "Remove from cart" : "Add to cart"}
        onClick={() => {
          dispatch(changeContentShoppingCart(id));
        }}
      />
      {inCart && <Quantity id={id} />}
    </div>
  );
};

export default Controls;
