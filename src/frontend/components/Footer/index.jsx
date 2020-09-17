/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import Button from "@/components/Button";
import PropTypes from "prop-types";

import "./styles.scss";

const Footer = ({ className }) => (
  <div styleName="footer" className={className}>
    <div className="innerSection">
      <div styleName="texts">
        <p styleName="about">
          My name is Jakub Niewczas and I’m a Tokyo-based Senior Software Engineer with nearly decade of professional
          work experience. I have been helping companies all around the world building and growing their platforms as
          both frontend and backend Engineer.
          <br />
          <br />
          Currently I’m a <b>lead frontend engineer at virtusize.jp</b>, where me and my team develop our tens of
          millions req/week apps. Our apps integrate with major big fashion companies such as&nbsp;
          <Button tag="a" href="https://www.virtusize.jp/partners" target="_blank">
            Kate Spate, Balenciaga, United Arrows, Marui etc..
          </Button>
          <br />
          <br />
          Previously I was a frontend <b>core engineer at Rakuten govoyagin.com</b> developing the platform, including
          successfully rewriting whole it’s frontend to React.
          <br />
          <br />
          <br />
          <>Yes, I know how to build a software... Yes, I review PRs commit by commit.</>
        </p>
        <div>
          <div styleName="avatar">Sr. Frontend Engineer Jakub Niewczas</div>
          <div styleName="links">
            <Button tag="a" styleName="link" href="http://jakubniewczas.pl/" target="_blank">
              <span styleName="icon">&#xe803;</span>
              website
            </Button>

            <Button tag="a" styleName="link" href="https://twitter.com/j_niewczas" target="_blank">
              <span styleName="icon">&#xe800;</span>
              twitter
            </Button>

            <Button tag="a" styleName="link" href="https://github.com/kubenstein" target="_blank">
              <span styleName="icon">&#xe801;</span>
              github
            </Button>

            <Button tag="a" styleName="link" href="mailto:niewczas.jakub@gmail.com" target="_blank">
              <span styleName="icon">&#xe802;</span>
              email
            </Button>
          </div>
        </div>
      </div>
      <div styleName="madeWithLove">
        i-can-help-indeed.jp was made with &lt;3 by Jakub Niewczas.
        <br />
        This is a fun project based on Indeed. All rights go to Indeed.
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
