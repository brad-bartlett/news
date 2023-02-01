import React from "react";

import styles from "./GeneratedArticle.module.scss";

interface GeneratedArticleProps {
  generatedArticle: string;
}

function GeneratedArticle({ generatedArticle }: GeneratedArticleProps) {
  return (
    <div className={styles.generatedArticle}>
      <h4>Generated content from gpt:</h4> {generatedArticle}
    </div>
  );
}

export default GeneratedArticle;
