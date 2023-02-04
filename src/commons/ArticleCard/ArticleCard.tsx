import React from "react";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

function ArticleCard({ title, imageUrl, description }: ArticleCardProps) {
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

export default ArticleCard;
