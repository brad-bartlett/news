import React from "react";
import ArticleCard from "@/src/commons/ArticleCard";

interface NewsStoryProps {
  title: string;
  urlToImage: string;
}

interface NewsStoriesProps {
  articles: NewsStoryProps[];
}

function ShowArticles({ articles }: NewsStoriesProps) {
  return (
    <section className="grid grid-cols-4 gap-4">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          urlToImage={article.urlToImage}
        />
      ))}
    </section>
  );
}

export default ShowArticles;
