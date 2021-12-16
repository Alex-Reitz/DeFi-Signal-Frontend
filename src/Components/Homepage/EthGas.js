import React from "react";
import EthCoin from "../../images/ethereum-1.svg";
import {
  Box,
  Center,
  Text,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

function EthGas({ gasData }) {
  return (
    <>
      <Box
        color={"white"}
        m={2}
        w={{ lg: "80%", md: "100%", sm: "100%" }}
        boxShadow={"2xl"}
        rounded={"md"}
        p={4}
        overflow={"hidden"}
      >
        <Box>
          <Center>
            <Heading
              m={2}
              fontSize={{ lg: "1.4rem", md: "1.1rem", sm: "1rem" }}
              fontFamily={"body"}
              color={"black"}
            >
              Ethereum Gas Data
            </Heading>
          </Center>
        </Box>
        <SimpleGrid
          columns={{ xl: "5", lg: "3", md: "3", sm: "3" }}
          fontSize={{ lg: "1.2rem", md: "1rem", sm: "0.7rem" }}
        >
          <Center>
            <Box>
              <Text color={"black"}>
                <strong>Average:</strong> {gasData.gas.average / 10} gwei
              </Text>
              <Text color={"black"}>
                {" "}
                <strong>Fast:</strong> {gasData.gas.fast / 10} gwei
              </Text>
            </Box>
          </Center>
          <Center display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}>
            <Box>
              <Text color={"black"}>
                {" "}
                <strong>Fastest:</strong> {gasData.gas.fastest / 10} gwei
              </Text>
              <Text color={"black"}>
                <strong>SafeLow: </strong>
                {gasData.gas.safeLow / 10} gwei
              </Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Image
                boxSize={{ lg: "100px", md: "75px", sm: "50px" }}
                src={EthCoin}
                alt="Ethereum Logo"
              />
            </Box>
          </Center>
          <Center display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}>
            <Box>
              <Text color={"black"}>
                <strong>Safe Low Wait:</strong> {gasData.gas.safeLowWait}{" "}
                seconds
              </Text>
              <Text color={"black"}>
                <strong>Average Wait:</strong> {gasData.gas.avgWait} minutes
              </Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Text color={"black"}>
                <strong>Fast Wait:</strong> {gasData.gas.fastWait} minutes
              </Text>
              <Text color={"black"}>
                <strong>Fastest Wait:</strong> {gasData.gas.fastestWait} minutes
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default EthGas;
