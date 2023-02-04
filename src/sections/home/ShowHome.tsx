import React from "react";

import { ArticleProps } from "@/types/ArticleProps";
import Header from "@/src/commons/Header";
import ShowArticles from "@/src/sections/Articles/ShowArticles";

function ShowHome({ articles }: { articles: ArticleProps[] }) {
  return (
    <>
      <Header text="Welcome to NewsCorp" />
      {articles && <ShowArticles articles={articles} />}
    </>
  );
}

export default ShowHome;
