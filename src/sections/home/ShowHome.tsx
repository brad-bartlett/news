import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import Image from "next/image";

import styles from "./ShowHome.module.scss";
import { ArticleProps } from "@/types/ArticleProps";
import GeneratedArticle from "@/src/components/GeneratedArticle";
import Article from "@/src/components/Article";
import Button from "@/src/commons/Button";

function ShowHome() {
  const [article, setArticle] = useState<ArticleProps>();
  const [generatedArticle, setGeneratedArticle] = useState<string>();

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const article = response.data.articles[0];
    setArticle(article);
    generateArticle(article);
  };

  const generateArticle = async (article: ArticleProps) => {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write an original article about ${article.title} ${article.description}`,
      temperature: 0.9,
      max_tokens: 800,
    });
    setGeneratedArticle(response.data.choices[0].text);
  };
  return (
    <div className={styles.showHome}>
      <h1>Welcome to NewsCorp</h1>
      <Button onClick={getNews} text="Get Headline" />
      {article && (
        <Article
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
        />
      )}
      {generatedArticle && (
        <GeneratedArticle generatedArticle={generatedArticle} />
      )}
    </div>
  );
}

export default ShowHome;
