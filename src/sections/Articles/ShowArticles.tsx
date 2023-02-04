import React from "react";
import Article from "@/src/components/Article";

interface NewsStoryProps {
  title: string;
  imageUrl: string;
  description: string;
}

interface NewsStoriesProps {
  stories: NewsStoryProps[];
}

function ShowArticles({ stories }: NewsStoriesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stories.map((story, index) => (
        <Article
          key={index}
          title={story.title}
          imageUrl={story.imageUrl}
          description={story.description}
        />
      ))}
    </section>
  );
}

export default ShowArticles;
