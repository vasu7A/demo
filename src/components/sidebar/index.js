import "./index.css";
const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="navlogo">
        <img
          src="https://gallery.bidsxchange.com/images/logo-hd.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="main">
        <h6 className="sub-heading">SELECT ADVERTISING CHANNEL </h6>
        <div className="square1-container">
          <div className="square1">
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/web.png"
                alt="display"
                className="display-icon"
              />
            </button>
            <h6>Display</h6>
          </div>
          <div className="square1">
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/video.png"
                alt="video"
                className="display-icon"
              />
            </button>
            <h6>Video</h6>
          </div>
          <div className="square1">
            <button className="btn">
              <img
                src="https://gallery.bidsxchange.com/images/filter/audio.png"
                alt="audio"
                className="display-icon"
              />
            </button>
            <h6>Audio</h6>
          </div>
          <div className="square1">
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
          <ul>
            <li>In Image</li>
            <li>Under Image</li>
            <li>In Contant</li>
            <li>InfoBot</li>
            <li>StayOn</li>
            <li>Tower</li>
            <li>Slider</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
