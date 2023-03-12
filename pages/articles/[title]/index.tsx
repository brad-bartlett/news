import React from "react";
import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import GeneratedArticle from "@/src/components/GeneratedArticle";
import { useAtom } from "jotai";
import { promptState } from "@/store/useStore";

function ArticlePage() {
  const [prompt] = useAtom(promptState);

  return (
    <PageWrapper>
      <Header text="Article Page" />
      {prompt && <GeneratedArticle prompt={prompt} />}
    </PageWrapper>
  );
}

export default ArticlePage;
