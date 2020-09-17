import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Button = ({ tag, onClick, children, className, disabled, ...otherProps }) => {
  const Component = tag;
  return (
    <Component
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      styleName="plain"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  tag: "button",
  className: "",
  children: "",
  disabled: false,
  onClick: () => {},
};

export default Button;
