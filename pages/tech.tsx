import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import GeneratedArticle from "@/src/components/GeneratedArticle";
import { getArticles } from "./api/news";

import Article from "@/src/components/Article";
import { ArticleProps } from "@/types/ArticleProps";
import Header from "@/src/commons/Header";
import PageWrapper from "@/src/commons/PageWrapper";

function Tech({ articles }: any) {
  const [generatedArticle, setGeneratedArticle] = useState<string>();

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
    <PageWrapper>
      <Header text="Tech News" />
      {articles && (
        <Article
          imageUrl={articles[0].imageUrl}
          title={articles[0].title}
          description={articles[0].description}
        />
      )}
      {generatedArticle && (
        <GeneratedArticle generatedArticle={generatedArticle} />
      )}
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
