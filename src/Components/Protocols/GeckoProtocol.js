import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import {
  Box,
  Heading,
  Center,
  Container,
  Text,
  SimpleGrid,
  Divider,
  Flex,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { findAllByAltText } from "@testing-library/dom";

/* additional_notices: []
asset_platform_id: "solana"
block_time_in_minutes: 0
categories: (5) ['Solana Ecosystem', 'Decentralized Exchange Token (DEX)', 'Automated Market Maker (AMM)', 'Yield Farming', 'Decentralized Finance (DeFi)']
coingecko_rank: 517
coingecko_score: 28.77
community_data: {facebook_likes: null, twitter_followers: 65298, reddit_average_posts_48h: 0, reddit_average_comments_48h: 0, reddit_subscribers: 354, …}
community_score: 27.721
contract_address: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE"
country_origin: "US"
description: {en: 'Orca is the most user-friendly DEX on Solana.\r\n\r\nO… tools for everyone, bringing DeFi to the masses.', de: 'Orca is the most user-friendly DEX on Solana.\r\n\r\nO… tools for everyone, bringing DeFi to the masses.', es: 'Orca is the most user-friendly DEX on Solana.\r\n\r\nO… tools for everyone, bringing DeFi to the masses.', fr: 'Orca is the most user-friendly DEX on Solana.\r\n\r\nO… tools for everyone, bringing DeFi to the masses.', it: 'Orca is the most user-friendly DEX on Solana.\r\n\r\nO… tools for everyone, bringing DeFi to the masses.', …}
developer_data: {forks: 0, stars: 0, subscribers: 0, total_issues: 0, closed_issues: 0, …}
developer_score: 0
genesis_date: null
hashing_algorithm: null
id: "orca"
image: {thumb: 'https://assets.coingecko.com/coins/images/17547/thumb/Orca_Logo.png?1628781615', small: 'https://assets.coingecko.com/coins/images/17547/small/Orca_Logo.png?1628781615', large: 'https://assets.coingecko.com/coins/images/17547/large/Orca_Logo.png?1628781615'}
last_updated: "2021-12-11T14:12:46.439Z"
links: {homepage: Array(3), blockchain_site: Array(10), official_forum_url: Array(3), chat_url: Array(3), announcement_url: Array(2), …}
liquidity_score: 45.957
localization: {en: 'Orca', de: 'Orca', es: 'Orca', fr: 'Orca', it: 'Orca', …}
market_cap_rank: 453
market_data: {current_price: {…}, total_value_locked: {…}, mcap_to_tvl_ratio: 0.11, fdv_to_tvl_ratio: 0.92, roi: null, …}
name: "Orca"
platforms: {solana: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE'}
public_interest_score: 0
public_interest_stats: {alexa_rank: null, bing_matches: null}
public_notice: null
sentiment_votes_down_percentage: 43.75
sentiment_votes_up_percentage: 56.25
status_updates: []
symbol: "orca"
tickers: (6) [{…}, {…}, {…}, {…}, {…}, {…}] */

function GeckoProtocol({ geckoData }) {
  const [infoLoaded, setInfoLoaded] = useState(false);
  let data = geckoData.result;
  useEffect(() => {
    const timer = setTimeout(() => {
      setInfoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  console.log(data);
  if (!infoLoaded) return <Loading />;

  return (
    <Container bg="white" maxW="container.lg" mt={10}>
      <Divider />
      <Center p={2}>
        <VStack>
          <Heading fontSize={20} color="black">
            Coin Gecko Data
          </Heading>
          <Image src={data.image.small} alt="logo" />
        </VStack>
      </Center>
      <Center>
        <VStack>
          <Text p={2}>{data.description.en}</Text>
          {data.asset_platform_id ? (
            <Text>
              <strong>Asset Platform ID:</strong> {data.asset_platform_id}
            </Text>
          ) : null}
          {data.categories.length > 0 ? (
            <Text fontSize={15}>
              <strong>Categories: </strong>
              <span>
                {data.categories.map((category) => (
                  <span>{category}, </span>
                ))}
              </span>
            </Text>
          ) : null}
          <Text>
            <strong>Coin Gecko Rank: </strong>
            {data.market_cap_rank}
          </Text>
        </VStack>
      </Center>

      <Center>
        <Box bg="gray.900" w="30rem" m={2} p={1} borderRadius={10}>
          <Center>
            <Text color="white" fontSize={19} fontWeight={500}>
              Market Data
            </Text>
          </Center>
          <SimpleGrid columns={1}>
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                Current Price
              </Box>
              <Box color="white" p="1">
                ${data.market_data.current_price.usd}
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                Circulating Supply
              </Box>
              <Box color="white" p="1">
                {data.market_data.circulating_supply.toLocaleString()}
              </Box>
            </Flex>
            <Divider />
            {data.market_data.max_supply ? (
              <Flex justifyContent="space-between">
                <Box color="white" p="1">
                  Total Supply
                </Box>
                <Box color="white" p="1">
                  {data.market_data.max_supply.toLocaleString()}
                </Box>
              </Flex>
            ) : null}
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                Market Cap
              </Box>
              <Box color="white" p="1">
                ${data.market_data.market_cap.usd.toLocaleString()}
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                Total Value Locked
              </Box>
              <Box color="white" p="1">
                ${data.market_data.total_value_locked.usd.toLocaleString()}
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                Total Volume
              </Box>
              <Box color="white" p="1">
                ${data.market_data.total_volume.usd.toLocaleString()}
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                All Time High
              </Box>
              <Box color="white" p="1">
                ${data.market_data.ath.usd.toLocaleString()}
              </Box>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Box color="white" p="1">
                All Time Low
              </Box>
              <Box color="white" p="1">
                ${data.market_data.atl.usd.toLocaleString()}
              </Box>
            </Flex>
          </SimpleGrid>
        </Box>
      </Center>
      <Text fontSize={22} align="center">
        <Link href={data.links.chat_url[0]}>
          <i class="fab fa-discord"></i>
        </Link>
      </Text>
    </Container>
  );
}

export default GeckoProtocol;
