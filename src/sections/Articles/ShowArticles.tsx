import React from "react";
import ArticleCard from "@/src/commons/ArticleCard";

interface NewsStoryProps {
  title: string;
  urlToImage: string;
  description: string;
}

interface NewsStoriesProps {
  articles: NewsStoryProps[];
}

function ShowArticles({ articles }: NewsStoriesProps) {
  return (
    <section className="grid grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </section>
  );
}

export default ShowArticles;
