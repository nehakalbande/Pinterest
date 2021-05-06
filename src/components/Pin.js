import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShareIcon from "@material-ui/icons/Share";
import LinkIcon from "@material-ui/icons/Link";
import React from "react";
import { members } from "../assets/members";
import { useState } from "react";
import "./Pin.css";

function Pin(props) {
  const [hover, setHover] = useState(false);
  const onHover1 = () => {
    setHover(true);
    console.log(hover);
  };

  const onHover2 = () => {
    setHover(false);
    console.log(hover);
  };

  if (hover === true) {
    return (
      <div className="container">
        {members.map((a, i) => (
          <div className="overlay">
            <img
              src={a.a}
              alt="images"
              className="images"
              // style={{ opacity: "0.75" }}
            />
            <div
              className="calm"
              onMouseEnter={onHover1}
              onMouseLeave={onHover2}
            >
              <div className="saving">Save</div>
              <div className="button_icons">
                <div className="linky">
                  <LinkIcon />
                </div>
                <div className="link">
                  <ShareIcon />
                </div>
                <div className="morehorizon">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      {members.map((a, i) => (
        <div className="overlay">
          <img src={a.a} alt="images" className="images" />
          <div className="calm" onMouseEnter={onHover1} onMouseLeave={onHover2}>
            <div className="saving">Save</div>
            <div className="button_icons">
              <div className="linky">
                <LinkIcon />
              </div>
              <div className="link">
                <ShareIcon />
              </div>
              <div className="morehorizon">
                <MoreHorizIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Pin;
