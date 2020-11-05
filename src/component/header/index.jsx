import React, { useState, useEffect, useRef, ReactDOM } from "react";
import "./style.css";
import { Button, TextField } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TocIcon from "@material-ui/icons/Toc";
export default function Header() {
  const header__link2 = useRef(null);
  return (
    <div className="header">
      <div className="header__left">
        <span
          onClick={() => {
            console.log(ReactDOM.findDOMNode(header__link2));
          }}
        >
          <TocIcon className="storageIcon" />
        </span>
        <div className="header__logo">
          <span>movie</span>
        </div>

        <div className="header__link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="">Showing</a>
            </li>
            <li>
              <a href="">Comming soon</a>
            </li>
            <li>
              <a href="">MyList</a>
            </li>
          </ul>
        </div>
        <div className="header__link__phone" ref={header__link2}>
          sadhsdsd
        </div>
      </div>
      <div className="header__right">
        <div className="header__search">
          <input
            type="text"
            placeholder="Search some thing..."
            spellCheck="false"
          />
        </div>
        <div className="header-login">
          <Button className="header__login__button">
            <ExitToAppIcon
              className="login__button"
              style={{ marginRight: "10px" }}
            />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
