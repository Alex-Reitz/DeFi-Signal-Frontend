import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import DeFiSignalApi from "../../api/api";
import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

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
  const [coinGeckoID, setCoinGeckoID] = useState("");

  useEffect(() => {
    setCoinGeckoID(data.state.gecko_id);
    console.log(coinGeckoID);
    async function getGeckoData() {
      console.log(coinGeckoID);
      const res = await DeFiSignalApi.getGeckoData(coinGeckoID);
      setGeckoData(res);
    }
    getGeckoData();
  }, [coinGeckoID]);

  let protData = data.state;
  return (
    <Box pt={5}>
      <Center>
        <Heading textStyle="h1" color="black">
          {protData.name}
        </Heading>
      </Center>
      <VStack p={4} align="center">
        <Text color="black">{protData.description}</Text>
        <Text>
          <a href={protData.url}>Project's Site </a>
        </Text>
      </VStack>
      <Center>
        <HStack>
          <Box>
            <HStack>
              <Text textStyle="p1">Chain:</Text>
              <Text>{protData.chain}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Text textStyle="p1">Category:</Text>
              <Text>{protData.category}</Text>{" "}
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Text textStyle="p1">Twitter:</Text>
              <Text> @{protData.twitter}</Text>
            </HStack>
          </Box>
        </HStack>
      </Center>
    </Box>
  );
}

export default Protocol;
