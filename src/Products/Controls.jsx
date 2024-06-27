import { useDispatch } from "react-redux";
import { changeContentShoppingCart } from "../Redux-toolbox/shopSlice";
import Button from "../Reusable code/Button";
import Quantity from "./Quantity";

const Controls = ({ inCard, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="controlsProduct">
      <Button
        className={`btn ${inCard ? "delete" : "add"}`}
        text={inCard ? "Remove from card" : "Add to card"}
        onClick={() => {
          dispatch(changeContentShoppingCart(id));
        }}
      />
      {inCard && <Quantity id={id} />}
    </div>
  );
};

export default Controls;
