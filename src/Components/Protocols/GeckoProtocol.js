import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

function GeckoProtocol({ geckoData }) {
  const [infoLoaded, setInfoLoaded] = useState(false);
  let data = geckoData.result;
  useEffect(() => {
    const timer = setTimeout(() => {
      setInfoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
    setInfoLoaded(false);
  }, []);
  console.log(data);
  if (!infoLoaded) return <Loading />;

  return (
    <Box>
      <h1>Gecko Data</h1>
      <p>{data.id}</p>
      <p>{data.description.en}</p>
    </Box>
  );
}

export default GeckoProtocol;
