import React from "react";

function Article({ info }) {
  return (
    <div className="article-container">
      <h3 className="article-title">{info.title}</h3>
      <span>Publised: {info.published_at} </span>
      <span>Author: {info.author.name} </span>
      <p className="article-content">{info.content}</p>
      <span>Tags: </span>
      <span>{info.tags.map((tag) => tag + " ")}</span>
      <p>
        Find the full article <a href={info.url}>here</a>
      </p>
    </div>
  );
}

export default Article;
