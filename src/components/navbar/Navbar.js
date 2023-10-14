import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2> Shopping Mart</h2>
      </Link>
      <ul className="navbar-ul">
        <li>Womens</li>
        <li>Men</li>
        <li>Boys</li>
        <li>Girls</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hello, DRISH</button>
      </ul>
    </div>
  );
};

export default Navbar;