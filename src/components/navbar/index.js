import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { sideBarContext } from "../../App";
import menuImg from "../../Data/menu.png";
import "./index.css";

const NavBar = () => {
  const value = useContext(sideBarContext);
  const { handleSideBar } = value;
  return (
    <div className="right-page">
      <nav className="right-nav">
        <div className="available-sizes">
          <h5>Available sizes :</h5>
          <button className="btn-sizes">300x20</button>
          <button className="btn-sizes">300x50</button>
        </div>
        <ul className="list-style">
          <NavLink
            to="/desktop"
            className={`${({ isActive }) =>
              isActive ? "active" : "inactive"} nav-icon-desktop`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="list-item ">
              <img
                src="https://gallery.bidsxchange.com/images/demo/desktop.png"
                alt="desktop"
                className="nav-icons "
              />
              <h5 className="nav-items-names">Desktop</h5>
            </li>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="list-item">
              <img
                src="https://gallery.bidsxchange.com/images/demo/mobile.png"
                alt="mobile"
                className="nav-icons"
              />
              <h5 className="nav-items-names">Mobile</h5>
            </li>
          </NavLink>
          <NavLink
            to="/tablet"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="list-item">
              <img
                src="https://gallery.bidsxchange.com/images/demo/tablet.png"
                alt="tablet"
                className="nav-icons"
              />
              <h5 className="nav-items-names">Tablet</h5>
            </li>
          </NavLink>
        </ul>
        <img
          src={menuImg}
          className="nav-mb-icons"
          alt="close-btn"
          onClick={handleSideBar}
        />
      </nav>
    </div>
  );
};

export default NavBar;
