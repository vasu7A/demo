import { NavLink } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div className="right-page">
      <nav className="right-nav">
        <div className="available-sizes">
          <h5>Available sizes :</h5>
          <button>300x20</button>
          <button>300x50</button>
        </div>
        <ul className="list-style">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="list-item">
              <img
                src="https://gallery.bidsxchange.com/images/demo/desktop.png"
                alt="desktop"
                className="nav-icons"
              />
              <h5>Desktop</h5>
            </li>
          </NavLink>
          <NavLink
            to="/mobile"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="list-item">
              <img
                src="https://gallery.bidsxchange.com/images/demo/mobile.png"
                alt="mobile"
                className="nav-icons"
              />
              <h5>Mobile</h5>
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
              <h5>Tablet</h5>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
