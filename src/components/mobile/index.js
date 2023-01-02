/* eslint-disable jsx-a11y/iframe-has-title */
import "./index.css";
const Mobile = () => {
  return (
    <div className="mobile-container">
      <img
        src="https://gallery.bidsxchange.com/images/screen/new_iphone.png"
        alt="mobile"
        className="mobile-img"
      />
      <div className="iframe-container">
        <iframe
          id="tab_frame"
          loading="lazy"
          className="frame-wrap-mobile"
          src="https://gallery.bidsxchange.com/demo/dummy/demo-ic.html"
          name="tab_iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Mobile;
