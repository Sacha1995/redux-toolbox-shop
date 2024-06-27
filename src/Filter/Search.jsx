import { useDispatch } from "react-redux";
import formEvent from "../Redux-toolbox/shopSlice";
import FormElements from "../Reusable code/FormElements";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <FormElements
        type="text"
        id="searchStr"
        callback={(e) => {
          dispatch(formEvent(e));
        }}
        placeholder="Search movie"
      />
    </div>
  );
};

export default Search;
