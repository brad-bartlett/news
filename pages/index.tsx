import React from "react";
import ShowHome from "@/src/sections/home";
import PageWrapper from "@/src/commons/PageWrapper";
import { getArticles } from "./api/news";
import { ArticleProps } from "@/types/ArticleProps";

function Home({ articles }: { articles: ArticleProps[] }) {
  return (
    <PageWrapper>
      <ShowHome articles={articles} />
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

export default Home;
