import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Article from "./Article";
import Loading from "../Loading/Loading";

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
    <div className="news-container">
      <h3 className="news-heading">Checkout the latest News from Messari</h3>
      {newsArticles.map((article) => (
        <Article key={article.id} info={article} />
      ))}
    </div>
  );
}

export default NewsList;