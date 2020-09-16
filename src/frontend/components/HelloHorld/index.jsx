import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const HelloWorld = ({ name }) => (
  <h1>
    Hello
    <span styleName="name">{name}</span>
  </h1>
);

HelloWorld.propTypes = {
  name: PropTypes.string,
};

HelloWorld.defaultProps = {
  name: "Indeed",
};

export default HelloWorld;
