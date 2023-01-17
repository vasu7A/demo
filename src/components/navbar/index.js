import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { sideBarContext } from "../../App";
import menuImg from "../../Data/menu.png";
import Resolutions from "../resolutions";
import "./index.css";

const NavBar = (props) => {
  const location = useLocation();
  const activeUrl = location.pathname;
  const value = useContext(sideBarContext);
  const {
    handleSideBar,
    activeUnit,
    activeTab,
    displayUnitList,
    videoUnitList,
    audioUnitList,
    nativeUnitList,
    activeIframeUrl,
    setActiveIframeUrl,
  } = value;
  useEffect(() => {
    setActiveIframeUrl("");
  }, [activeUrl]);
  let requiredList = [];
  if (activeTab === "DISPLAY") {
    requiredList = displayUnitList;
  } else if (activeTab === "VIDEO") {
    requiredList = videoUnitList;
  } else if (activeTab === "AUDIO") {
    requiredList = audioUnitList;
  } else if (activeTab === "NATIVE") {
    requiredList = nativeUnitList;
  }

  const activeTagSizes = requiredList.filter((each) => each.id === activeUnit);
  let requiredUrlTabSizes = [];

  if (activeTagSizes.length !== 0) {
    if (activeUrl === "/") {
      requiredUrlTabSizes = activeTagSizes[0].availableSizes.desktop;
    } else if (activeUrl === "/mobile") {
      requiredUrlTabSizes = activeTagSizes[0].availableSizes.mobile;
    } else if (activeUrl === "/tablet") {
      requiredUrlTabSizes = activeTagSizes[0].availableSizes.tablet;
    }
  }
  const requiredLenthSize = requiredUrlTabSizes.length;
  const availableSizesClass = requiredLenthSize !== 0 ? "visible" : "hidden";
  //const requiredUrlSizes = activeTagSizes.availableSizes.filter(
  //  (each) => each === activeUrl
  //);
  //console.log(activeTagSizes);

  return (
    <div className="right-page">
      <nav className="right-nav">
        <div className="available-sizes">
          <h5 className={availableSizesClass}>Available sizes :</h5>
          <ul className="r-place">
            {requiredUrlTabSizes.map((each) => (
              <Resolutions
                each={each}
                key={each[0]}
                isSizeActive={activeIframeUrl === each[2]}
              />
            ))}
          </ul>
        </div>
        <ul className="list-style">
          <NavLink
            to="/"
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
