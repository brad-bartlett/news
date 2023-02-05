import axios from "axios";

export const getArticleBySlug = async (query: string) => {
  try {
    const response = await axios.get(`/generatedArticles/${query}`);
    const generatedArticle = response.data;

    return generatedArticle;
  } catch (error) {
    console.error(
      `An error occurred while fetching the generated article: ${error}`
    );
    return error;
  }
};

async function handler(req: any, res: any) {
  const category = req.query;
  const response = await getArticleBySlug(category);

  // Something went wrong with the request
  if (response instanceof Error) {
    return res.status(404).json({ error: response.message });
  }

  return res.status(200).json({ title: response });
}

export default handler;
