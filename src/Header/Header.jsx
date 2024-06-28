import Search from "../Filter/Search";
import Sort from "../Filter/Sort";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Search />
        <Sort />
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
