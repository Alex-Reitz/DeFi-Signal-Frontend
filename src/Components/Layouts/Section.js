import React from "react";
import { Center } from "@chakra-ui/react";
import Container from "./Container";

const Section = (props) => {
  const { full, children, ...rest } = props;
  return (
    <Center as="section" position="relative" w="100%" {...rest}>
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;
