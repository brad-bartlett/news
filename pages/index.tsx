import React from "react";
import Head from "next/head";
import ShowHome from "@/src/sections/home";

function Home() {
  return (
    <>
      <Head>
        <title>OpenAI News App</title>
      </Head>
      <div className="container">
        <ShowHome />
      </div>
    </>
  );
}

export default Home;
