import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__primary">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header__logo"
            alt="Amazon Logo"
          />
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {/* redirect guest to login page if there is no user*/}
          <Link className="header__link" to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">&#38; Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionCart">
              <ShoppingCartSharpIcon fontSize="large" header__CartIcon />
              <span className="header__optionLineTwo header__cartCount">
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__secondary">
        <div className="header__option header__optionMenu">
          <MenuIcon fontSize="large" className="header__menuIcon" />
          <span>All</span>
        </div>
        <div className="header__option">
          <span>Whole Foods</span>
        </div>
        <div className="header__option">Amazon Basics</div>
        <div className="header__option">Livestreams</div>
        <div className="header__option">Today's Deals</div>
        <div className="header__option">Shopper Toolkit</div>
        <div className="header__option">Buy Again</div>
      </div>
    </div>
  );
}

export default Header;
