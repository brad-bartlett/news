import React from "react";
import { getArticles } from "./api/news";

import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import ShowArticles from "@/src/sections/Articles";

function Tech({ articles }: any) {
  return (
    <PageWrapper>
      <Header text="Tech News" />
      {articles && <ShowArticles articles={articles} />}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const articles = await getArticles("technology");

  if (!articles) {
    return {
      props: {
        error: "No articles were found",
      },
    };
  }
  return {
    props: {
      articles,
    },
    revalidate: 20,
  };
}

export default Tech;
