import Search from "../Filter/Search";
import Sort from "../Filter/Sort";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <Search />
      <Sort />
      <ShoppingCart />
    </div>
  );
};

export default Header;
