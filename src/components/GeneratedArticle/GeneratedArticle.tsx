import React from "react";

interface GeneratedArticleProps {
  generatedArticle: string;
}

function GeneratedArticle({ generatedArticle }: GeneratedArticleProps) {
  return (
    <>
      <h4 className="font-bold pb-2">Generated content from gpt:</h4>
      {generatedArticle}
    </>
  );
}

export default GeneratedArticle;
