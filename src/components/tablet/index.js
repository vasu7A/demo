/* eslint-disable jsx-a11y/iframe-has-title */
import "./index.css";
const Tablet = () => {
  return (
    <div className="tablet-container">
      <img
        src="https://gallery.bidsxchange.com/images/screen/new_ipad.png"
        alt="Tablet"
        className="tablet-img"
      />
      <div className="iframe-container">
        <iframe
          id="tab_frame"
          loading="lazy"
          class="frame-wrap-tablet"
          src="https://gallery.bidsxchange.com/demo/dummy/demo-ic.html"
          name="tab_iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Tablet;
