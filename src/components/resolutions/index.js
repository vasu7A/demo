import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { sideBarContext } from "../../App";
import "./index.css";

const Resolutions = (props) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const { each, isSizeActive } = props;
  const value = useContext(sideBarContext);
  const { setActiveIframeUrl } = value;
  const len = each.length;
  const sizeActive = isSizeActive && "activeSize";
  const colorActive = isSizeActive ? "activeColor" : "";
  const handleActiveSize = (url) => {
    setActiveIframeUrl(url);
  };
  let iframeName = "";
  if (currentUrl === "/") {
    iframeName = "desktop";
  } else if (currentUrl === "/mobile") {
    iframeName = "mobile";
  } else if (currentUrl === "/tablet") {
    iframeName = "tablet";
  }
  const renderAvailableSizes = () => {
    return (
      <li>
        <button className={`r-buttons ${sizeActive}`}>
          <a
            className={`each-resolution ${colorActive}`}
            href={each[2]}
            id="in-image-728x90"
            target={`${iframeName}_iframe`}
            onClick={() => handleActiveSize(each[2])}
          >
            {each[1]}
          </a>
        </button>
      </li>
    );
  };

  return len !== 0 && renderAvailableSizes();
};

export default Resolutions;
