import { useDispatch } from "react-redux";
import { formEvent } from "../Redux-toolbox/shopSlice";
import FormElements from "../Reusable code/FormElements";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <FormElements
        type="text"
        id="searchStr"
        callback={(e) => {
          dispatch(formEvent({ id: e.target.id, value: e.target.value }));
        }}
        placeholder="Search products"
      />
    </div>
  );
};

export default Search;
