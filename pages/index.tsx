import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { RoughNotation } from "react-rough-notation";

import dynamic from "next/dynamic";

import Footer from "@/components/Footer";

const DynamicComponentWithNoSSR = dynamic(() => import("@/Confetti"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [isTitleNotationActive, setisTitleNotationActive] =
    React.useState(false);
  return (
    <>
      <Head>
        <title>Confetti Website 🎊</title>
        <meta name="description" content="Website with cool Confetti 🎊" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <DynamicComponentWithNoSSR />

          <RoughNotation type="underline" show={isTitleNotationActive}>
            <h1
              className="text-4xl lg:text-6xl font-bold"
              onMouseEnter={() => setisTitleNotationActive(true)}
              // onMouseLeave={() => setisTitleNotationActive(false)}
            >
              Welcome to <span  className="text-blue-600">Confetti</span> Wesbite
            </h1>
          </RoughNotation>

          {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6  sm:w-full">
            <a href="https://github.com/alphaolomi/nextjs-confetti" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h2>Opensource &rarr;</h2>
              <p>Find source code for this site.</p>
            </a>

            <a href="https://www.npmjs.com/package/react-confetti" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h2>Learn more &rarr;</h2>
              <p>This wbsite uses React Confetti on Next.js !</p>
            </a>
          </div>
        </main>
      <Footer />
      </div>
    </>
  );
};

export default Home;
