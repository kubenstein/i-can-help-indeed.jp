import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const HiddenImagePreloader = ({ imageUrls }) => (
  <div styleName="imagePreloader">
    {imageUrls.map((url) => (
      <div key={url} style={{ backgroundImage: `url(${url})` }} />
    ))}
  </div>
);

HiddenImagePreloader.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};

HiddenImagePreloader.defaultProps = {
  imageUrls: [],
};

export default HiddenImagePreloader;
