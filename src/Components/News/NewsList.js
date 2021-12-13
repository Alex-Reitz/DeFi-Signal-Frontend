import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Article from "./Article";
import Loading from "../Loading/Loading";
import { Box, SimpleGrid, Heading, Center } from "@chakra-ui/react";

function NewsList() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getNews() {
      const res = await DeFiSignalApi.getNews();
      setNewsArticles(res.news.data);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getNews();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <>
      <Center>
        <Heading color="black" p={2}>
          Latest News From Messari
        </Heading>
      </Center>
      <SimpleGrid
        columns={{
          base: 1, // 0-48em
          md: 2, // 48em-80em,
          xl: 3, // 80em+
        }}
        spacing={1}
      >
        {newsArticles.map((article) => (
          <Box w="100%" p={4} color="white" key={article.id}>
            <Article key={article.id} info={article} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default NewsList;
