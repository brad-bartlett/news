import React from "react";
import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import GeneratedArticle from "@/src/components/GeneratedArticle";
import { useRecoilValue } from "recoil";
import { promptState } from "@/store/useStore";
function ArticlePage() {
  const prompt = useRecoilValue(promptState);
  return (
    <PageWrapper>
      <Header text="Article Page" />
      {prompt && <GeneratedArticle prompt={prompt} />}
    </PageWrapper>
  );
}

export default ArticlePage;
