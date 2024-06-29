import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formEvent } from "../Redux-toolbox/filterSlice";
import FormElements from "../Reusable code/FormElements";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <Link to="/">
        <FormElements
          type="text"
          id="searchStr"
          callback={(e) => {
            dispatch(formEvent({ id: e.target.id, value: e.target.value }));
          }}
          placeholder="Search products"
        />
      </Link>
    </div>
  );
};

export default Search;
