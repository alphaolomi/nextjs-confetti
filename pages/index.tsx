import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import dynamic from "next/dynamic";

import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";

const DynamicComponentWithNoSSR = dynamic(() => import("@/Confetti"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [isTiitleNotationActive, setIsTiitleNotationActive] =
    React.useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Confetti Website 🎊</title>
        <meta name="description" content="Website with cool Confetti 🎊" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicComponentWithNoSSR />

        <RoughNotation type="underline" show={isTiitleNotationActive}>
          <h1
            className={styles.title}
            onMouseEnter={() => setIsTiitleNotationActive(true)}
            // onMouseLeave={() => setIsTiitleNotationActive(false)}
          >
            Welcome to Confetti Wesbite
          </h1>
        </RoughNotation>

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
