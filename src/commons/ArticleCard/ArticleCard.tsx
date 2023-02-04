import React from "react";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  urlToImage: string;
  description: string;
}

function ArticleCard({ title, urlToImage, description }: ArticleCardProps) {
  return (
    <div className="flex flex-col items-center">
      {urlToImage && (
        <Image src={urlToImage} width={200} height={200} alt={title} />
      )}
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

export default ArticleCard;
