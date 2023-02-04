import React from "react";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

function ArticleCard({ title, imageUrl, description }: ArticleCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={imageUrl} alt={title} className="w-full" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

export default ArticleCard;
