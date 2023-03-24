import React from "react";

import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import { getArticles } from "./api/news";
import ShowArticles from "@/src/sections/Articles";

function Sports({ articles }: any) {
  return (
    <PageWrapper>
      <Header text="Sports News" />
      {articles && <ShowArticles articles={articles} />}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const articles = await getArticles("sports");

  if (!articles) {
    return {
      props: {
        error: "No articles found",
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

export default Sports;
