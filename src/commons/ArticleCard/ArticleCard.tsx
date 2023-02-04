import React from "react";
import Image from "next/image";

interface NewsStoryProps {
  title: string;
  imageUrl: string;
  description: string;
}

function NewsStory({ title, imageUrl, description }: NewsStoryProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default NewsStory;
