import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Article from "./Article";
import Loading from "../Loading/Loading";
import "./NewsList.css";

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
      <h3 className="news-heading">Latest News from Messari</h3>
      <div className="outer-article-container">
        {newsArticles.map((article) => (
          <Article key={article.id} info={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
