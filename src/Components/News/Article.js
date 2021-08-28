import React from "react";
import "./Article.css";

function Article({ info }) {
  if (!info.tags.length) {
    return (
      <div className="article-container">
        <h3 className="article-title">{info.title}</h3>
        <p className="article-author">
          <strong>Author:</strong> {info.author.name}
        </p>
        <p className="article-published">
          <strong> Publised:</strong> {info.published_at}{" "}
        </p>
        <p className="article-full-link">
          <a href={info.url}>Read the full article</a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="article-container">
        <h3 className="article-title">{info.title}</h3>
        <p className="article-author">
          <strong>Author:</strong> {info.author.name}
        </p>
        <p className="article-published">
          <strong> Publised:</strong> {info.published_at}{" "}
        </p>
        <div className="article-tags">
          <span>Tags: </span>
          <span>{info.tags.map((tag) => tag + " ")}</span>
        </div>
        <p className="article-full-link">
          <a href={info.url}>Read the full article</a>
        </p>
      </div>
    );
  }
}

export default Article;
