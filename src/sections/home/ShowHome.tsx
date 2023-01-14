import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

import styles from "./ShowHome.module.scss";

function ShowHome() {
  const [article, setArticle] = useState();
  const [generatedArticle, setGeneratedArticle] = useState("");

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const article = response.data.articles[0];
    setArticle(article);
    generateArticle(article);
  };

  const generateArticle = async (article: any) => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${article.title} ${article.description}`,
      temperature: 0.7,
      max_tokens: 800,
      //   top_p: 1.0,
      //   frequency_penalty: 0.0,
      //   presence_penalty: 0.0,
    });
    console.log(response);
    console.log(response.data.choices[0].text);
    setGeneratedArticle(response.data.choices[0].text);
  };

  return (
    <div className={styles.showHome}>
      <h1>OpenAI News App</h1>
      <button onClick={getNews} style={{ marginBottom: "50px" }}>
        Get Headlines
      </button>
      {article && (
        <div className={styles.showHome__articleContainer}>
          <img
            src={article?.urlToImage}
            alt={article.title}
            className={styles.articleImage}
          />
          <div>
            <h4>Article Title : {article?.title}</h4>
            <p>Article Description: {article?.description}</p>
          </div>
        </div>
      )}
      {generatedArticle && (
        <div style={{ marginTop: "100px" }}>
          <h4>Generated content from gpt:</h4> {generatedArticle}
        </div>
      )}
    </div>
  );
}

export default ShowHome;