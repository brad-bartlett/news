import React from "react";
import Head from "next/head";
import ShowHome from "@/src/sections/home";
import NavBar from "@/src/components/NavBar";

function Home() {
  return (
    <>
      <Head>
        <title>NewsCorp</title>
      </Head>
      <NavBar />
      <ShowHome />
    </>
  );
}

export default Home;
