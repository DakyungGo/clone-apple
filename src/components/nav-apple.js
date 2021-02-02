import React from "react";
import "../styles/nav-apple.css";
import ai from "../imgs/apple-icon.svg";

const NavApple = () => {
  return (
    <nav className="ac-globalnav">
      <div className="ac-gn-content">
        <ul className="ac-gn-header">
          <li className="ac-gn-item ac-gn-menuicon">
            <label className="ac-gn-menuicon-label" for="ac-gn-menustate">
              <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
                <span className="ac-gn-menuicon-bread-crust"></span>
              </span>
              <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
                <span className="ac-gn-menuicon-bread-crust"></span>
              </span>
            </label>
          </li>
          <li className="ac-gn-item ac-gn-apple">
            <a
              className="ac-gn-link ac-gn-link-apple"
              href="https://www.apple.com/kr/"
            >
              <span className="ac-gn-link-text">Apple</span>
            </a>
          </li>
          <li className="ac-gn-item ac-gn-bag"></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavApple;
