/* eslint-disable jsx-a11y/iframe-has-title */
import "./index.css";
const Desktop = () => {
  return (
    <>
      <div className="desktop-container">
        <img
          src="https://gallery.bidsxchange.com/images/screen/new_imac.png"
          alt="desktop"
          className="desktop-img"
          id="desktop_iframe"
        />
        <div className="iframe-container">
          <iframe
            id="desktop_frame"
            loading="lazy"
            className="frame-wrap-desktop"
            src="https://gallery.bidsxchange.com/demo/demo.html"
            name="desktop_iframe"
          ></iframe>
        </div>
      </div>
      <h1 className="request-msg">Please select mobile or tablet</h1>
    </>
  );
};

export default Desktop;
