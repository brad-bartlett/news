import { Configuration, OpenAIApi } from "openai";
import { ArticleProps } from "@/types/ArticleProps";

export const getGeneratedArticle = async (article: ArticleProps) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const generatedArticle = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write an original article about ${article.title} ${article.description}`,
      temperature: 0.9,
      max_tokens: 800,
    });

    return generatedArticle;
  } catch (error) {
    console.error(`An error occurred while fetching the story: ${error}`);
    return error;
  }
};

async function handler(req: any, res: any) {
  const article = req.query.article;
  const response = await getGeneratedArticle(article);

  // Something went wrong with the request
  if (response instanceof Error) {
    return res.status(404).json({ error: response.message });
  }

  return res.status(200).json({ title: response });
}

export default handler;
