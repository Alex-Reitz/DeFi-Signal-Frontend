import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DeFiSignalApi from "../../api/api";
import GeckoProtocol from "./GeckoProtocol";
import {
  Box,
  Heading,
  Center,
  HStack,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
//Data from useLocation()
/* {
    "id": "419",
    "name": "Saber",
    "address": "solana:Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
    "symbol": "SBR",
    "url": "https://saber.so",
    "description": "Saber is the first automated market maker optimized for trading pegged assets on Solana. Our protocol enables Solana users and applications to efficiently trade between stable pairs of assets, as well as earn yields by providing liquidity to the platform.",
    "chain": "Solana",
    "logo": "https://icons.llama.fi/saber.jpg",
    "audits": "0",
    "audit_note": null,
    "gecko_id": "saber",
    "cmcId": "11181",
    "category": "Dexes",
    "chains": [
        "Solana"
    ],
    "module": "saber.js",
    "twitter": "Saber_HQ",
    "slug": "saber",
    "tvl": 1083517003.8308105,
    "chainTvls": {
        "Solana": 1083517003.8308105
    },
    "change_1h": -0.6748854005649179,
    "change_1d": -0.21866800362107597,
    "change_7d": -2.812799985082819,
    "fdv": 920464678,
    "mcap": 31973912
} */

function Protocol() {
  let data = useLocation();
  const [geckoData, setGeckoData] = useState([]);
  let protData = data.state;

  const geckoID = data.state.gecko_id;

  useEffect(() => {
    async function getGeckoData(geckoID) {
      const res = await DeFiSignalApi.getGeckoData(geckoID);
      setGeckoData(res);
    }
    getGeckoData(geckoID);
  }, []);
  return (
    <Container maxW="container.lg">
      <Center>
        <Heading textStyle="h1" color="black">
          {protData.name}
        </Heading>
      </Center>
      <Center p={3}>
        <VStack p={1}>
          <Text
            fontSize={{ xl: "15", lg: "14", md: "13", sm: "12", xs: "11" }}
            color="black"
          >
            {protData.description}
          </Text>

          <Text>
            <a href={protData.url}>{protData.name}'s website </a>
          </Text>
        </VStack>
      </Center>
      <Center>
        <HStack>
          <Box>
            <Text>
              <strong>Chain:</strong>
              {protData.chain}
            </Text>{" "}
          </Box>
          <Box>
            <Text>
              <strong>Category:</strong>
              {protData.category}
            </Text>
          </Box>
          <Box>
            <Text>
              <strong>Twitter:</strong>@{protData.twitter}
            </Text>
          </Box>
        </HStack>
      </Center>
      {geckoID ? (
        <GeckoProtocol geckoData={geckoData} />
      ) : (
        <Center>
          <Text fontSize={22}>No data available from Coin Gecko</Text>
        </Center>
      )}
    </Container>
  );
}

export default Protocol;
