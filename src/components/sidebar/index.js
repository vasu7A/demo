import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { sideBarContext } from "../../App";
import AddUnits from "../addunits";
import closeImg from "../../Data/close.png";
import "./index.css";
const displayUnitList = [
  {
    id: uuidv4(),
    name: "In Image",
    url: "https://gallery.bidsxchange.com/demo/in-image-mobile-320x50.html",
    image: closeImg,
    script: "https://gallery.bidsxchange.com/demo/ad-units/in_image.js",
  },
  {
    id: uuidv4(),
    name: "Under Image",
    url: "https://gallery.bidsxchange.com/demo/under-image-mobile-300x50.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "In Content",
    url: "https://gallery.bidsxchange.com/demo/incontent-mobile-320x50.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Infobot",
    url: "https://gallery.bidsxchange.com/demo/infoBot-mobile-320x50.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "StayOn",
    url: "https://gallery.bidsxchange.com/demo/catfish-mobile-320x50.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Slider",
    url: "https://gallery.bidsxchange.com/demo/slider-mobile-right.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Hybrid Slider",
    url: "https://gallery.bidsxchange.com/demo/hybrid-mobile-right.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Parallax",
    url: "https://gallery.bidsxchange.com/demo/parallax-mobile-300x600.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Interstitial",
    url: "https://gallery.bidsxchange.com/demo/interstitial-mobile-300x250.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Page Push Down",
    url: "https://gallery.bidsxchange.com/demo/page-push-down-mobile-320x50.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Ad Push Down",
    url: "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x50.html",
    image: closeImg,
  },
];
const videoUnitList = [
  {
    id: uuidv4(),
    name: "Contextual Video",
    url: "https://gallery.bidsxchange.com/demo/video-floating-mobile.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "Web Stories",
    url: "https://gallery.bidsxchange.com/demo/video-stories.html",
    image: closeImg,
  },
  {
    id: uuidv4(),
    name: "In App Rewarded",
    url: "https://gallery.bidsxchange.com/demo-games/index.html",
    image: closeImg,
  },
];
const audioUnitList = [
  {
    id: uuidv4(),
    name: "Audio Flashes (Beta)",
    url: "https://gallery.bidsxchange.com/demo/audio-flash-mobile.html",
    image: closeImg,
  },
];
const nativeUnitList = [
  {
    id: uuidv4(),
    name: "Standard Native Unit",
    url: "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x50.html",
    image: closeImg,
  },
];
const SideBar = () => {
  const value = useContext(sideBarContext);
  const { isOpen, activeTab, activeUnit, handleSideBar, setActiveTab } = value;

  const displayActive = activeTab === "DISPLAY" && "activeUnit";
  const videoActive = activeTab === "VIDEO" && "activeUnit";
  const audioActive = activeTab === "AUDIO" && "activeUnit";
  const nativeActive = activeTab === "NATIVE" && "activeUnit";

  const condition = isOpen ? "open" : "close";

  const renderDisplayUnits = () => {
    return (
      <ul className="unit-list-container">
        {displayUnitList.map((each) => (
          <AddUnits
            each={each}
            key={each.id}
            isActiveUnit={activeUnit === each.id}
          />
        ))}
      </ul>
    );
  };

  const renderVideoUnits = () => {
    return (
      <ul className="unit-list-container">
        {videoUnitList.map((each) => (
          <AddUnits
            each={each}
            key={each.id}
            isActiveUnit={activeUnit === each.id}
          />
        ))}
      </ul>
    );
  };

  const renderAudioUnits = () => {
    return (
      <ul className="unit-list-container">
        {audioUnitList.map((each) => (
          <AddUnits
            each={each}
            key={each.id}
            isActiveUnit={activeUnit === each.id}
          />
        ))}
      </ul>
    );
  };
  const renderNativeUnits = () => {
    return (
      <ul className="unit-list-container">
        {nativeUnitList.map((each) => (
          <AddUnits
            each={each}
            key={each.id}
            isActiveUnit={activeUnit === each.id}
          />
        ))}
      </ul>
    );
  };
  return (
    <aside className={`sidebar ${condition}`}>
      <div className="navlogo">
        <img
          src="https://gallery.bidsxchange.com/images/logo-hd.png"
          alt="logo"
          className="logo"
        />
        <img
          src={closeImg}
          className="nav-mb-icons"
          alt="close-btn"
          onClick={handleSideBar}
        />
      </div>
      <div className="main">
        <h6 className="sub-heading">SELECT ADVERTISING CHANNEL </h6>
        <div className="square1-container">
          <div
            className={`square1 ${displayActive}`}
            onClick={() => setActiveTab("DISPLAY")}
          >
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/web.png"
                alt="display"
                className="display-icon"
              />
            </button>
            <h6>Display</h6>
          </div>
          <div
            className={`square1 ${videoActive}`}
            onClick={() => setActiveTab("VIDEO")}
          >
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/video.png"
                alt="video"
                className="display-icon"
              />
            </button>
            <h6>Video</h6>
          </div>
          <div
            className={`square1 ${audioActive}`}
            onClick={() => setActiveTab("AUDIO")}
          >
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/audio.png"
                alt="audio"
                className="display-icon"
              />
            </button>
            <h6>Audio</h6>
          </div>
          <div
            className={`square1 ${nativeActive}`}
            onClick={() => setActiveTab("NATIVE")}
          >
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/website.png"
                alt="native"
                className="display-icon"
              />
            </button>
            <h6>Native</h6>
          </div>
        </div>
        <h6 className="sub-heading"> SELECT AD UNIT DSK </h6>
        <div className="square2-container">
          {displayActive && renderDisplayUnits()}
          {videoActive && renderVideoUnits()}
          {audioActive && renderAudioUnits()}
          {nativeActive && renderNativeUnits()}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
