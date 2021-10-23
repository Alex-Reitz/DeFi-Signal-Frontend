import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
  <Box
    w="full"
    maxW="1366px"
    mx="auto"
    px={{ base: "6", md: "8", lg: "7.5rem" }}
    {...props}
  />
);

export default Container;
