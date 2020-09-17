import React from "react";
import PropTypes from "prop-types";

import logo from "@/assets/images/logo.png";

import "./styles.scss";

const AuthRequiredScreen = ({ onPasswordChange }) => (
  <div styleName="wrapper">
    <div styleName="content">
      <img src={logo} alt="logo" />
      <br />
      This website is a recruitment assignment I proactively did for Indeed.
      <br />
      <br />
      As the UX Frontend position is heavily about localising not only content but whole design, I decided to make a
      game with visual novel flavours.. Thats definitely with a spirit of a Japanese Internet culture.
      <br />
      <br />
      <b>To access this page, answer the question below:</b>
      <br />
      What is the first name and last name of the creator of this page?
      <br />
      (all lowercase, no spaces)
      <br />
      <br />
      <input onChange={(e) => onPasswordChange(e.target.value)} type="password" />
      <br />
      <br />
    </div>
  </div>
);

AuthRequiredScreen.propTypes = {
  onPasswordChange: PropTypes.func.isRequired,
};

export default AuthRequiredScreen;
