import React from "react";
import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import GeneratedArticle from "@/src/components/GeneratedArticle";

function ArticlePage() {
  const title = sessionStorage.getItem("title");
  const description = sessionStorage.getItem("description");
  return (
    <PageWrapper>
      <Header text="Article Page" />
      {title && description && (
        <GeneratedArticle title={title} description={description} />
      )}
    </PageWrapper>
  );
}

export default ArticlePage;
