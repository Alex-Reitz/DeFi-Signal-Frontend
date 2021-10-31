import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Article from "./Article";
import Loading from "../Loading/Loading";
import { Box, SimpleGrid } from "@chakra-ui/react";

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
    <SimpleGrid columns={3} spacing={3}>
      {newsArticles.map((article) => (
        <Box w="100%" p={4} color="white" key={article.id}>
          <Article key={article.id} info={article} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default NewsList;
