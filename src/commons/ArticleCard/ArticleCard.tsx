import React from "react";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  urlToImage?: string;
}

function ArticleCard({ title, urlToImage }: ArticleCardProps) {
  return (
    <div className="grid grid-flow-row auto-rows-min">
      <div>
        {urlToImage && (
          <Image
            src={urlToImage}
            width={200}
            height={200}
            alt={title}
            className="rounded-lg w-full h-44"
          />
        )}
      </div>
      <h2 className="text-lg font-bold text-ellipsis">{title}</h2>
    </div>
  );
}

export default ArticleCard;
