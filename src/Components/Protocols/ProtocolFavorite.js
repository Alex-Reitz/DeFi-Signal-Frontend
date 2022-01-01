import React, { useState, useContext } from "react";
import UserContext from "../Auth/UserContext";
import DeFiSignalApi from "../../api/api";
import { CheckIcon, AddIcon } from "@chakra-ui/icons";

function ProtocolFavorite({ slug, selectedProtocols }) {
  const [click, setClick] = useState(
    selectedProtocols.indexOf(slug) > -1 ? true : false
  );
  const { currentUser } = useContext(UserContext);
  let userName = currentUser.username;

  async function toggle() {
    const res = await DeFiSignalApi.toggleFavorite(userName, { slug });
    return res;
  }

  return click ? (
    <CheckIcon
      onClick={() => {
        setClick(!click);
        toggle();
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
        toggle();
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
