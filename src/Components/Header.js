import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">SignIn</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__optionCount">
                0
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
