import React from "react";

import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";
import { getArticles } from "./api/news";
import ShowArticles from "@/src/sections/Articles";

function Business({ articles }: any) {
  return (
    <PageWrapper>
      <Header text="Business News" />
      {articles && <ShowArticles articles={articles} />}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const articles = await getArticles("business");

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

export default Business;
