import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

import demoGif from "@/assets/images/demo.gif";
import docsPreview1 from "@/assets/images/docsPreview1.jpg";
import docsPreview2 from "@/assets/images/docsPreview2.jpg";
import docsPreview3 from "@/assets/images/docsPreview3.jpg";

import "./styles.scss";

const Demo = () => (
  <div styleName="wrapper" id="demoSection">
    <div className="innerSection">
      <h3 className="title">Demo Preview</h3>
      <div styleName="demoImages">
        <img src={demoGif} alt="demo" />
      </div>

      <h3 className="title">Technical Documentation</h3>
      <Button tag={Link} to="/technical-documentation" className="subtitle">
        Go to technical documentation page
      </Button>
      <div styleName="demoImages">
        <Button tag={Link} to="/technical-documentation">
          <img src={docsPreview1} alt="documentation preview 1" />
        </Button>
        <Button tag={Link} to="/technical-documentation">
          <img src={docsPreview2} alt="documentation preview 1" />
        </Button>
        <Button tag={Link} to="/technical-documentation">
          <img src={docsPreview3} alt="documentation preview 1" />
        </Button>
      </div>
    </div>
  </div>
);

export default Demo;
