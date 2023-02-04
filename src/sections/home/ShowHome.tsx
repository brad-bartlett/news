import React from "react";

import { ArticleProps } from "@/types/ArticleProps";
import Header from "@/src/commons/Header";
import ArticleCard from "@/src/commons/ArticleCard";
import ShowArticles from "../Articles";

function ShowHome({ articles }: { articles: ArticleProps[] }) {
  return (
    <>
      <Header text="Welcome to NewsCorp" />
      {articles && <ShowArticles stories={articles} />}
    </>
  );
}

export default ShowHome;
