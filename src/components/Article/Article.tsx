import React from "react";
import Image from "next/image";
import { ArticleProps } from "@/types/ArticleProps";

import styles from "./Article.module.scss";

function Article({ urlToImage, title, description }: ArticleProps) {
  return (
    <div className={styles.article}>
      {urlToImage && (
        <Image
          src={urlToImage}
          alt={title}
          width={200}
          height={200}
          className={styles.article__image}
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
