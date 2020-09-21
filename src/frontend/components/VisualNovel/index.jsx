import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button";
import AppearingText from "@/components/AppearingText";
import HiddenImagePreloader from "@/components/HiddenImagePreloader";

import "./styles.scss";

const VisualNovel = ({ screenInfos, initialScreen, onExit, className }) => {
  const [screen, setScreen] = useState(initialScreen);
  const screenInfo = screenInfos[screen];
  const next = () => {
    if (screenInfo.exit) return onExit(screenInfo.exit);
    return setScreen(screenInfo.next);
  };

  const imageUrls = useMemo(
    () =>
      [
        ...new Set([
          ...Object.keys(screenInfos).map((key) => screenInfos[key].backgroundImage),
          ...Object.keys(screenInfos).map((key) => screenInfos[key].leftCharacter),
          ...Object.keys(screenInfos).map((key) => screenInfos[key].rightCharacter),
        ]),
      ].filter((v) => v),
    [screenInfos]
  );

  return (
    <>
      <HiddenImagePreloader imageUrls={imageUrls} />
      <div className={className} styleName="canvas" style={{ backgroundImage: `url(${screenInfo.backgroundImage})` }}>
        {screenInfo.leftCharacter && (
          <div styleName="leftCharacter" style={{ backgroundImage: `url(${screenInfo.leftCharacter})` }} />
        )}
        {screenInfo.rightCharacter && (
          <div styleName="rightCharacter" style={{ backgroundImage: `url(${screenInfo.rightCharacter})` }} />
        )}

        <div styleName="dialog">
          <h3>{screenInfo.dialog.name}</h3>
          <p>
            <AppearingText text={screenInfo.dialog.text} />
          </p>
          {(screenInfo.next || screenInfo.exit) && (
            <Button onClick={next} styleName="nextBtn">
              {screenInfo.dialog.btn}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

VisualNovel.propTypes = {
  screenInfos: PropTypes.shape().isRequired,
  initialScreen: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  className: PropTypes.string,
};

VisualNovel.defaultProps = {
  onExit: () => {},
  className: "",
};

export default VisualNovel;
