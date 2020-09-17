import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@/components/Button";
import AppearingText from "@/components/AppearingText";
import screenInfos from "./screenInfos";

import "./styles.scss";

const Story = () => {
  const history = useHistory();
  const [screen, setScreen] = useState(0);
  const screenInfo = screenInfos[screen];
  const next = () => {
    if (screenInfo.endRoute) return history.push({ pathname: screenInfo.endRoute });
    return setScreen(screenInfo.next);
  };

  return (
    <div styleName="canvas" style={{ backgroundImage: `url(${screenInfo.backgroundImage})` }}>
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
        {(screenInfo.next || screenInfo.endRoute) && (
          <Button onClick={next} styleName="nextBtn">
            Next -&gt;
          </Button>
        )}
      </div>
    </div>
  );
};

export default Story;
