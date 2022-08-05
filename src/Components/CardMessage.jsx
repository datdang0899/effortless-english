import React from "react";
import UserLogo from "./Common/UserLogo";
import Button from "./Common/Button";
import BoxReplyControlBtns from "./Common/BoxReplyControlBtns";
import { useState } from "react";

function CardMessage(props) {
  const [active, setActive] = useState(false);

  return (
    <div className={"card-message " + getClassMessage()}>
      <div className="card-message_logo">
        <UserLogo />
      </div>
      <div className="card-message_content">
        <div className="content-heading">
          <h2>
            username <span>20-08-2022, 08:20 AM</span>
          </h2>
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={() => setActive(!active)}
          ></i>
        </div>
        <div className="content-message">
          <p>
            Templates are executed by applying them to a data structure.
            Annotations in the template refer to elements of the data structure
            (typically a field of a struct or a key in a map).{" "}
          </p>
        </div>
        <div className="content-boxReply">
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            cols=""
            rows="3"
          ></textarea>
          <div className="content-boxReply_control">
            <BoxReplyControlBtns />
            <Button text="Reply" bg="bg-cardMessage">
              <i className="fa fa-reply" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  function getClassMessage() {
    return active ? "show" : "";
  }
}

export default CardMessage;
