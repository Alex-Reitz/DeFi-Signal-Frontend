import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";
import { Link } from "react-router-dom";
import { CheckIcon, AddIcon } from "@chakra-ui/icons";

function ProtocolFavorite() {
  const [click, setClick] = useState(false);
  const handleClick = () => console.log("clicked");
  return click ? (
    <CheckIcon
      onClick={() => {
        setClick(!click);
        handleClick();
      }}
      _hover={{ cursor: "pointer" }}
      w={2.5}
      h={2.5}
      mr={2}
      p={0}
    />
  ) : (
    <AddIcon
      onClick={() => {
        setClick(!click);
        handleClick();
      }}
      _hover={{ cursor: "pointer" }}
      w={2.5}
      h={2.5}
      mr={2}
      p={0}
    />
  );
}

export default ProtocolFavorite;
