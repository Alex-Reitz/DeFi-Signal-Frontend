import React from "react";
import { Flex } from "@chakra-ui/react";

const BaseContainer = (props) => {
  const { cssClass } = props;

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1366px" }}
      m="0 auto"
      className={
        cssClass
          ? "base__container " + cssClass + "__container"
          : "base__container"
      }
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default BaseContainer;
