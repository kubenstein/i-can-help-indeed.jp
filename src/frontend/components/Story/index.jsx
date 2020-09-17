import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button";

import img1 from "@/assets/images/story/background.jpg";
import character from "@/assets/images/story/character.png";
import "./styles.scss";
import { useHistory } from "react-router";

const screenInfos = {
  0: {
    backgroundImage: img1,
    leftCharacter: character,
    dialog: {
      name: "Person 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex ex, malesuada nec nisl et, egestas auctor nibh. Sed iaculis a velit ac porttitor. Aenean placerat libero ac diam cursus, nec luctus elit tempus. Duis ornare eu nisl elementum elementum. Curabitur nec dolor viverra, euismod neque eu, iaculis diam",
    },
    next: 1,
  },
  1: {
    backgroundImage: img1,
    rightCharacter: character,
    dialog: {
      name: "Person 2",
      text: "Sure...",
    },
    endRoute: "/",
  },
};

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
        <p>{screenInfo.dialog.text}</p>
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
