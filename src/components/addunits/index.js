import { useContext } from "react";
import { sideBarContext } from "../../App";
import { useLocation } from "react-router-dom";
import "./index.css";
const AddUnits = (props) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const value = useContext(sideBarContext);
  const { handleActiveAddUnit, handleSideBar, setActiveIframeUrl } = value;
  const { each, isActiveUnit } = props;
  const activeUnitColor = isActiveUnit ? "active-unit" : "";
  const activeIconColor = isActiveUnit ? "active-icon" : "";
  const selectIt = (id, dynamicUrl) => {
    handleActiveAddUnit(id);
    setActiveIframeUrl(dynamicUrl);
    handleSideBar();
  };
  let dynamicUrl = "";
  if (currentUrl === "/mobile") {
    if (each.availableSizes.mobile.length !== 0) {
      dynamicUrl = each.availableSizes.mobile[0][2];
    } else {
      dynamicUrl = each.url;
    }
  } else if (currentUrl === "/") {
    if (each.availableSizes.desktop.length !== 0) {
      dynamicUrl = each.availableSizes.desktop[0][2];
    } else {
      dynamicUrl = each.url;
    }
  } else if (currentUrl === "/tablet") {
    if (each.availableSizes.tablet.length !== 0) {
      dynamicUrl = each.availableSizes.tablet[0][2];
    } else {
      dynamicUrl = each.url;
    }
  }
  let iframeName = "";
  if (currentUrl === "/") {
    iframeName = "desktop";
  } else if (currentUrl === "/mobile") {
    iframeName = "mobile";
  } else if (currentUrl === "/tablet") {
    iframeName = "tablet";
  }
  return (
    <li className={`unit-list ${activeUnitColor}`}>
      <a
        id={each.id}
        className="nav-link"
        onClick={() => selectIt(each.id, dynamicUrl)}
        href={dynamicUrl}
        target={`${iframeName}_iframe`}
      >
        <each.image className={`unit-icon ${activeIconColor}`} />
        <p className="add-unit-link-name">{each.name}</p>
      </a>
    </li>
  );
};

export default AddUnits;
