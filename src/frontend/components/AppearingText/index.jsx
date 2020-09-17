import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AppearingText = ({ text, speed }) => {
  const [index, setIndex] = useState(0);
  const appearingText = useMemo(() => text.slice(0, index), [text, index]);

  useEffect(() => setIndex(0), [text]);
  useEffect(() => {
    const interval = setInterval(() => setIndex((current) => current + 1), speed);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{appearingText}</>;
};

AppearingText.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};

AppearingText.defaultProps = {
  text: "",
  speed: 5,
};

export default AppearingText;
