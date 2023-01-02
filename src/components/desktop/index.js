/* eslint-disable jsx-a11y/iframe-has-title */
import "./index.css";
const Desktop = () => {
  return (
    <div className="desktop-container">
      <img
        src="https://gallery.bidsxchange.com/images/screen/new_imac.png"
        alt="desktop"
        className="desktop-img"
        id="desktop_iframe"
      />
      <div className="iframe-container">
        <iframe
          id="tab_frame"
          loading="lazy"
          class="frame-wrap-desktop"
          src="https://gallery.bidsxchange.com/demo/dummy/demo-ic.html"
          name="tab_iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Desktop;
