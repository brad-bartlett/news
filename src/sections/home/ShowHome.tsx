import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import Image from "next/image";

import styles from "./ShowHome.module.scss";
import { Article } from "@/types/article";

function ShowHome() {
  const [article, setArticle] = useState<Article>();
  const [generatedArticle, setGeneratedArticle] = useState<string>();

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const article = response.data.articles[0];
    setArticle(article);
    generateArticle(article);
  };

  const generateArticle = async (article: Article) => {
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
      <h1>OpenAI News App</h1>
      <button onClick={getNews} className={styles.showHome__button}>
        Get Headlines
      </button>
      {article && (
        <div className={styles.showHome__articleContainer}>
          <Image
            src={article.urlToImage}
            alt={article.title}
            width={200}
            height={200}
            className={styles.articleImage}
          />
          <div>
            <h4>Article Title : {article.title}</h4>
            <p>Article Description: {article.description}</p>
          </div>
        </div>
      )}
      {generatedArticle && (
        <div className={styles.showHome__gptArticleContainer}>
          <h4>Generated content from gpt:</h4> {generatedArticle}
        </div>
      )}
    </div>
  );
}

export default ShowHome;
