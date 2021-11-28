import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Protocol() {
  const { slug } = useParams();
  const [src, setSrc] = useState(null);

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default Protocol;
