import React, { useState, useRef } from "react";
import "./Collapsible.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        <i className="fas fa-caret-down" />
      </button>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? { height: parentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Collapsible;
