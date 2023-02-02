import React from "react";
import Head from "next/head";
import ShowHome from "@/src/sections/home";
import NavBar from "@/src/components/NavBar";
import PageWrapper from "@/src/commons/PageWrapper";

function Home() {
  return (
    <>
      <Head>
        <title>NewsCorp</title>
      </Head>
      <NavBar />
      <PageWrapper>
        <ShowHome />
      </PageWrapper>
    </>
  );
}

export default Home;
