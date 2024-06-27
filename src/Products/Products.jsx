import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortedandFiltered } from "../Controllers/getSortedandFiltered.js";
import {
  selectProducts,
  selectSearchStr,
  selectSelect,
  toggleDescription,
} from "../Redux-toolbox/shopSlice";
import Controls from "./Controls";

const Products = () => {
  const products = useSelector(selectProducts);
  const searchStr = useSelector(selectSearchStr);
  const select = useSelector(selectSelect);
  const dispatch = useDispatch();
  console.log(products);

  const filtered = useMemo(() => {
    if (!products) {
      return [];
    }
    return getSortedandFiltered(products, searchStr, select);
  }, [products, searchStr, select]);

  if (!products) {
    return <p>Loading...</p>;
  }

  if (filtered.length === 0) {
    return <p>No matches</p>;
  }

  return (
    <div className="products">
      {filtered.map((product) => {
        const {
          title,
          image,
          description,
          price,
          id,
          viewDescription,
          inCart,
        } = product;
        return (
          <div className="productCard" key={id}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>£{Number(price).toFixed(2)}</p>
            <p
              className="description"
              onClick={() => dispatch(toggleDescription(id))}
            >
              Description <span className="arrow">&#9660;</span>
            </p>
            <p className={viewDescription ? "view" : "noview"}>{description}</p>
            <Controls inCart={inCart} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
