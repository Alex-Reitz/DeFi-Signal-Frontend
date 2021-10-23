import React from "react";
import PageTransition from "../../components/PageTransition";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../Sections/Header";

const BaseLayout = (props) => {
  return (
    <>
      <PageTransition>
        <Flex
          direction="column"
          alignItems="center"
          className="base-page"
          {...props}
        >
          <Box w="100%" m="0 auto">
            {props.children}
          </Box>
        </Flex>
      </PageTransition>
    </>
  );
};

export default BaseLayout;
