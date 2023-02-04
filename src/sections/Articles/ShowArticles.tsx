import React from "react";
import ArticleCard from "@/src/commons/ArticleCard";

interface NewsStoryProps {
  title: string;
  urlToImage: string;
  description: string;
}

interface NewsStoriesProps {
  stories: NewsStoryProps[];
}

function ShowArticles({ stories }: NewsStoriesProps) {
  return (
    <section className="grid grid-cols-4 gap-4">
      {stories.map((story, index) => (
        <ArticleCard
          key={index}
          title={story.title}
          urlToImage={story.urlToImage}
          description={story.description}
        />
      ))}
    </section>
  );
}

export default ShowArticles;
