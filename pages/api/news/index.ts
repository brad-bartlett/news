import axios from "axios";

const getStory = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const story = response.data.articles[0];

    console.log({ story });

    return story;
  } catch (error) {
    console.error(`An error occurred while fetching the story: ${error}`);
    return error;
  }
};

async function handler(req: any, res: any) {
  const response = await getStory();

  // Something went wrong with the request
  if (response instanceof Error) {
    return res.status(404).json({ error: response.message });
  }

  return res.status(200).json({ title: response });
}

export default handler;

export const config = {
  type: "experimental-scheduled",
  schedule: "@hourly",
};
