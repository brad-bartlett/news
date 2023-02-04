import React from "react";
import Image from "next/image";
import { ArticleProps } from "@/types/ArticleProps";

function Article({ imageUrl, title, description }: ArticleProps) {
  return (
    <div className="grid grid-flow-col gap-6 grid-rows-1">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          objectFit="cover"
        />
      )}
      <div>
        <h4>Article Title : {title}</h4>
        {description && <p>Article Description: {description}</p>}
      </div>
    </div>
  );
}

export default Article;
