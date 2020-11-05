import React from "react";
import "./style.css";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="wrapper__pic">
        <img src="https://wallpaperaccess.com/full/44849.jpg" alt="" />
        <div className="overplay"></div>
        <div className="wrapper__text">
          <div className="title">
            <p>Spider man 5</p>
          </div>
          <span className="descreption">
            Spider man 5 có khá nhiều khác biệt so với các phần trước tập trung
            ở sự khác biệt ở tính cách của các nhân vật, Peter không còn là cậu
            bé nhút nhát mà khá nghịch ngợm.
          </span>
          <div className="wrapper__button">
            <Button className="wrapper__button__play">
              <PlayArrowIcon />
              Play
            </Button>
            <Button className="wrapper__button__info">
              <InfoOutlinedIcon />
              More Infomation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
