import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import "./styles.scss";

const Header = ({ fixed }) => {
  const [isMenuOpen, setMenu] = useState(false);
  const toggle = () => setMenu((v) => !v);

  return (
    <>
      <div styleName={`header ${fixed ? "fixed" : ""}`}>
        <div className="innerSection" styleName="innerSection">
          <Link to="/" styleName="logo">
            i-can-help-indeed.jp
          </Link>

          <Button onClick={toggle} styleName="menu">
            Menu
          </Button>

          {isMenuOpen && (
            <>
              <Button tag="div" onClick={toggle} styleName="menuOverlay">
                &nbsp;
              </Button>
              <div styleName="more">
                <Button tag={Link} to="/" styleName="menuItem">
                  Home Page
                </Button>
                <Button tag={Link} to="/technical-documentation" styleName="menuItem">
                  Technocal Documentation
                </Button>
                <Button tag={Link} to="/story" styleName="menuItem">
                  Story Mode
                </Button>
                <Button tag={Link} to="/game" styleName="menuItem">
                  Game Mode
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div styleName={fixed ? "positionFixedGap" : ""} />
    </>
  );
};

Header.propTypes = {
  fixed: PropTypes.bool,
};

Header.defaultProps = {
  fixed: false,
};

export default Header;
