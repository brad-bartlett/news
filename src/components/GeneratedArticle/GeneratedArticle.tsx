import React, { useState, useEffect, useCallback } from "react";
import { Configuration, OpenAIApi } from "openai";

interface GeneratedArticleProps {
  prompt: string;
}

function GeneratedArticle({ prompt }: GeneratedArticleProps) {
  const [generatedArticle, setGeneratedArticle] = useState("");
  const generateArticle = useCallback(async () => {
    try {
      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const article = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 9.0,
        max_tokens: 15000,
      });
      const articleResponse = article.data.choices[0].text as string;
      setGeneratedArticle(articleResponse);
    } catch (error) {
      console.error(`An error has occurred: ${error}`);
      return error;
    }
  }, [prompt]);

  useEffect(() => {
    generateArticle();
  }, [generateArticle]);

  return (
    <>
      <h4 className="font-bold pb-2">Generated content from gpt:</h4>
      <p>{generatedArticle}</p>
    </>
  );
}

export default GeneratedArticle;
