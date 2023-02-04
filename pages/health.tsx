import React from "react";

import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import ShowArticles from "@/src/sections/Articles";
import { getArticles } from "./api/news";

function Health({ articles }: any) {
  return (
    <PageWrapper>
      <Header text="Health News" />
      {articles && <ShowArticles articles={articles} />}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const articles = await getArticles("health");

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

export default Health;
