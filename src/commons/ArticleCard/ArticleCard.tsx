import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface ArticleCardProps {
  title: string;
  urlToImage?: string;
  id?: number;
}

function ArticleCard({ title, urlToImage, id }: ArticleCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/articles/[...title]", `/articles/${title}`);
  };
  return (
    <div className="grid grid-flow-row auto-rows-min">
      <div onClick={handleClick}>
        {urlToImage ? (
          <Image
            src={urlToImage}
            width={176}
            height={176}
            alt={title}
            className="rounded-lg w-full h-44"
          />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1626808936965-121820669d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80"
            width={176}
            height={176}
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
