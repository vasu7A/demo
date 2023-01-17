import { useContext, useEffect } from "react";
import { sideBarContext } from "../../App";
import AddUnits from "../addunits";
import closeImg from "../../Data/close.png";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const value = useContext(sideBarContext);
  const {
    isOpen,
    activeTab,
    activeUnit,
    handleSideBar,
    setActiveTab,
    displayUnitList,
    videoUnitList,
    audioUnitList,
    nativeUnitList,
  } = value;

  const displayActive = activeTab === "DISPLAY" && "activeUnit";
  const videoActive = activeTab === "VIDEO" && "activeUnit";
  const audioActive = activeTab === "AUDIO" && "activeUnit";
  const nativeActive = activeTab === "NATIVE" && "activeUnit";

  const condition = isOpen ? "open" : "close";
  const path = useNavigate();

  useEffect(() => {
    if (window.screen.width <= 768) {
      path("/mobile");
      console.log(path);
    }
  }, []);

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
        <Link to="/">
          <img
            src="https://gallery.bidsxchange.com/images/logo-hd.png"
            alt="logo"
            className="logo"
          />
        </Link>
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
            <h6 className="add-channel-name">Display</h6>
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
            <h6 className="add-channel-name">Video</h6>
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
            <h6 className="add-channel-name">Audio</h6>
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
            <h6 className="add-channel-name">Native</h6>
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
