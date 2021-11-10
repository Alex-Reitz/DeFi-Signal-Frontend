import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

function Loading() {
  return (
    <div
      className="loading"
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <PulseLoader size={30} />
    </div>
  );
}
export default Loading;
