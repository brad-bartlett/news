import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: any;
}

function ArticleCard({ article }: ArticleCardProps) {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push({
  //     pathname: "/articles/[title]",
  //     query: { category: "general" },
  //   });
  // };

  // console.log({ router });

  const storeData = () => {
    sessionStorage.setItem("title", article.title);
    sessionStorage.setItem("description", article.description);
  };
  return (
    <div className="grid grid-flow-row auto-rows-min">
      <Link onClick={storeData} href={`/articles/${article.title}`}>
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            width={176}
            height={176}
            alt={article.title}
            className="rounded-lg w-full h-44"
          />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1626808936965-121820669d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80"
            width={176}
            height={176}
            alt={article.title}
            className="rounded-lg w-full h-44"
          />
        )}
        <h2 className="text-lg font-bold text-ellipsis">{article.title}</h2>
      </Link>
    </div>
  );
}

export default ArticleCard;
