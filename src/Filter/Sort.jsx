import { useDispatch } from "react-redux";
import { formEvent } from "../Redux-toolbox/shopSlice";
import FormElements from "../Reusable code/FormElements";

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <FormElements
        type="select"
        label="Order:"
        id="select"
        name="order"
        callback={(e) => {
          dispatch(formEvent({ id: e.target.id, value: e.target.value }));
        }}
        options={[
          "Original",
          "A to Z",
          "Z to A",
          "Price: low to high",
          "Price: high to low",
        ]}
      />
    </div>
  );
};

export default Sort;
