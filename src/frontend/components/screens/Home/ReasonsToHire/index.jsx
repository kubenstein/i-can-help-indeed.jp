import React from "react";
import Button from "@/components/Button";

import "./styles.scss";

const ReasonsToHire = () => (
  <div className="innerSection">
    <h1 className="title">Reasons to Cooperate</h1>

    <div className="subtitle">UX Frontend position at Indeed</div>
    <div styleName="list">
      <div styleName="item">
        <span styleName="number">01</span>
        <h3>Senior Engineer skills and mentality</h3>
        <p>
          Decade-long experience results in sr lvl mentality, confidence and fluency in using industrial grade
          technologies.
          <br />
          <br />
          Architecture, scalability, implementation, maintainability, tooling, discipline.
        </p>
      </div>

      <div styleName="item">
        <span styleName="number">02</span>
        <h3>Corporate scale</h3>
        <p>
          As a member of big organisations, I understand importance of processes and chains on commands. Always offering
          help yet, as a senior I know very well there are moments when there is no time for discussions.
        </p>
      </div>

      <div styleName="item">
        <span styleName="number">03</span>
        <h3>Team player</h3>
        <p>
          I'm respected and liked by my team members. Being called "Sensei" by them is not without reasons. I'm friendly
          person, who really loves what he does.
        </p>
      </div>

      <div styleName="item">
        <span styleName="number">04</span>
        <h3>Proactive problem solving</h3>
        <p>
          Let this page be an example of my proactive nature.
          <br />
          <br />
          Writing stable, big scale engineering projects requires this trait in your personality.
        </p>
      </div>

      <div styleName="item">
        <span styleName="number">05</span>
        <h3>Living in Japan with valid working visa</h3>
        <p>
          I have been living in Japan for more than 3 years now. My working visa is still valid for about 1.5 year. I
          don&apos;t require relocation or any other on-boarding visa support.
        </p>
      </div>

      <Button
        tag="a"
        styleName="item portfolioItem"
        target="_blank"
        rel="nofollow"
        href="/assets/files/jakub-niewczas-sr-frontend-engineer.pdf"
      >
        <span styleName="number">06</span>
        <h3>Open Potfolio / CV</h3>
      </Button>
    </div>
  </div>
);

export default ReasonsToHire;
