import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import GeneratedArticle from "@/src/components/GeneratedArticle";
import { getStory } from "./api/news";

import Article from "@/src/components/Article";
import { ArticleProps } from "@/types/ArticleProps";
import Header from "@/src/commons/Header";
import Button from "@/src/commons/Button";
import PageWrapper from "@/src/commons/PageWrapper";

function Tech({ article }: any) {
  const [generatedArticle, setGeneratedArticle] = useState<string>();

  console.log({ article });
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
      {/* <Button onClick={generateArticle(article)} text="Get headline" /> */}
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
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const tech = "technology";
  const article = await getStory(tech);

  if (!article) {
    return {
      props: {
        error: "No articles were found",
      },
    };
  }
  return {
    props: {
      article,
    },
    revalidate: 20,
  };
}

export default Tech;
