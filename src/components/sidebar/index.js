import { useState, useContext } from "react";
import { sideBarContext } from "../../App";
import closeImg from "../../Data/close.png";
import "./index.css";
const SideBar = () => {
  const [activeTab, setActiveTab] = useState("DISPLAY");
  const displayActive = activeTab === "DISPLAY" && "activeUnit";
  const videoActive = activeTab === "VIDEO" && "activeUnit";
  const audioActive = activeTab === "AUDIO" && "activeUnit";
  const nativeActive = activeTab === "NATIVE" && "activeUnit";

  const value = useContext(sideBarContext);
  const { isOpen, handleSideBar } = value;
  const condition = isOpen ? "open" : "close";

  const renderDisplayUnits = () => {
    return (
      <ul>
        <li>In Image</li>
        <li>Under Image</li>
        <li>In Content</li>
        <li>InfoBot</li>
        <li>StayOn</li>
        <li>Tower</li>
        <li>Slider</li>
        <li>Hybrid Slider</li>
        <li>Parallax</li>
        <li>Interstitial</li>
        <li>Page Push Down</li>
        <li>Ad Push Down</li>
      </ul>
    );
  };

  const renderVideoUnits = () => {
    return (
      <ul>
        <li>Contextual Video</li>
        <li>Web Stories</li>
        <li>OTT Apps</li>
        <li>Video Library</li>
        <li>Stories Library</li>
      </ul>
    );
  };

  const renderAudioUnits = () => {
    return (
      <ul>
        <li>Audio Flashs(Beta)</li>
      </ul>
    );
  };
  const renderNativeUnits = () => {
    return (
      <ul>
        <li>Standard Native Unit</li>
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
