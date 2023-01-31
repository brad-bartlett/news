import React from "react";
import Head from "next/head";
import ShowHome from "@/src/sections/home";
import NavBar from "@/src/components";

function Home() {
  return (
    <>
      <Head>
        <title>OpenAI News App</title>
      </Head>
      <NavBar />
      <ShowHome />
    </>
  );
}

export default Home;
